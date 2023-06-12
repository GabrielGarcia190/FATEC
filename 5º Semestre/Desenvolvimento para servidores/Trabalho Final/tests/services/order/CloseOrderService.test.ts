import CloseOrderService from '../../../src/services/order/CloseOrderService';
import prisma from '../../../src/prisma';

jest.mock('../../../src/prisma', () => ({
  order: {
    findUnique: jest.fn(),
    update: jest.fn(),
  },
}));

describe('CloseOrderService', () => {
  let closeOrderService: CloseOrderService;

  beforeEach(() => {
    closeOrderService = new CloseOrderService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should close an open order', async () => {
    const request = {
      id: "1",
    };

    const order = {
      id: request.id,
      status: 'OPEN',
      items: [
        {
          id: "1",
          quantity: 2,
          product: {
            id: "1",
            name: 'Product 1',
            price: 10,
          },
        },
        {
          id: "2",
          quantity: 1,
          product: {
            id: "2",
            name: 'Product 2',
            price: 20,
          },
        },
      ],
    };

    (prisma.order.findUnique as jest.Mock).mockResolvedValueOnce(order);
    (prisma.order.update as jest.Mock).mockResolvedValueOnce(order);

    const result = await closeOrderService.execute(request);

    expect(prisma.order.findUnique).toHaveBeenCalledTimes(1);
    expect(prisma.order.findUnique).toHaveBeenCalledWith({
      where: {
        id: request.id,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    expect(prisma.order.update).toHaveBeenCalledTimes(1);
    expect(prisma.order.update).toHaveBeenCalledWith({
      where: {
        id: request.id,
      },
      data: {
        status: 'CLOSED',
      },
    });

    const totalPrice = order.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    expect(result).toEqual({
      order,
      totalPrice,
    });
  });

  it('should return an error if the order is not found', async () => {
    const request = {
      id: "1",
    };

    (prisma.order.findUnique as jest.Mock).mockResolvedValueOnce(null);

    const result = await closeOrderService.execute(request);

    expect(prisma.order.findUnique).toHaveBeenCalledTimes(1);
    expect(prisma.order.findUnique).toHaveBeenCalledWith({
      where: {
        id: request.id,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    expect(result).toEqual({
      error: 'Order not found',
    });
  });

  it('should return an error if the order is not open', async () => {
    const request = {
      id: "1",
    };

    const order = {
      id: request.id,
      status: 'CLOSED',
      items: [],
    };

    (prisma.order.findUnique as jest.Mock).mockResolvedValueOnce(order);

    const result = await closeOrderService.execute(request);

    expect(prisma.order.findUnique).toHaveBeenCalledTimes(1);
    expect(prisma.order.findUnique).toHaveBeenCalledWith({
      where: {
        id: request.id,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    expect(result).toEqual({
      error: 'Order is not open',
    });
  });
});