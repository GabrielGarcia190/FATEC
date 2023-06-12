import CreateOrderService from '../../../src/services/order/CreateOrderService';
import prisma from '../../../src/prisma';

jest.mock('../../../src/prisma', () => ({
  order: {
    create: jest.fn(),
  },
}));

describe('CreateOrderService', () => {
  let createOrderService: CreateOrderService;

  beforeEach(() => {
    createOrderService = new CreateOrderService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create a new order', async () => {
    const request = {
      table: 1,
      name: 'John Doe',
    };

    const order = {
      id: 1,
      table: request.table,
      name: request.name,
    };

    (prisma.order.create as jest.Mock).mockResolvedValueOnce(order);

    const result = await createOrderService.execute(request);

    expect(prisma.order.create).toHaveBeenCalledTimes(1);
    expect(prisma.order.create).toHaveBeenCalledWith({
      data: {
        table: request.table,
        name: request.name,
      },
    });
    expect(result).toEqual(order);
  });
});