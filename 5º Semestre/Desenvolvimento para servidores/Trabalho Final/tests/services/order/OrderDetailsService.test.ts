import OrderDetailsService from '../../../src/services/order/OrderDetailsService';
import p from '../../../src/prisma';

jest.mock('../../../src/prisma', () => {
  return {
    order: {
      findUnique: jest.fn(),
    },
  };
});

describe('OrderDetailsService', () => {
  let orderDetailsService: OrderDetailsService;

  beforeEach(() => {
    orderDetailsService = new OrderDetailsService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return order details', async () => {
    const req = {
      id: "1",
    };

    const order = {
      id: 1,
      name: 'Test Order',
      createdAt: new Date(),
      items: [
        {
          id: 1,
          name: 'Test Item',
          price: 10,
          quantity: 2,
        },
      ],
    };

    (p.order.findUnique as jest.Mock).mockResolvedValueOnce(order);

    const result = await orderDetailsService.execute(req);

    expect(p.order.findUnique).toHaveBeenCalledWith({
      where: {
        id: "1",
      },
      include: {
        items: {
          where: {
            orderId: "1",
          },
        },
      },
    });

    expect(result).toEqual(order);
  });

  it('should return error if order not found', async () => {
    const req = {
      id: "1",
    };

    (p.order.findUnique as jest.Mock).mockResolvedValueOnce(null);

    const result = await orderDetailsService.execute(req);

    expect(p.order.findUnique).toHaveBeenCalledWith({
      where: {
        id: "1",
      },
      include: {
        items: {
          where: {
            orderId: "1",
          },
        },
      },
    });

    expect(result).toEqual({ error: 'Order not found' });
  });
});