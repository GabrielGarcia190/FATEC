import ListOrderService from '../../../src/services/order/ListOrderService';
import p from '../../../src/prisma';

type RightRequest = {
  page: string;
  limit: string;
  search: string;
  listBy: "name" | "hour" | "date";
}

jest.mock('../../../src/prisma', () => {
  return {
    order: {
      findMany: jest.fn(),
    },
  };
});

describe('ListOrderService', () => {
  let listOrderService: ListOrderService;

  beforeEach(() => {
    listOrderService = new ListOrderService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should list orders by name', async () => {
    const req = {
      page: "1",
      limit: "10",
      search: 'test',
      listBy: 'name' as const,
    };

    const orders = [
      {
        id: "1",
        name: 'Test Order',
        createdAt: new Date(),
      },
    ];

    (p.order.findMany as jest.Mock).mockResolvedValueOnce(orders);

    const result = await listOrderService.execute(req);

    expect(p.order.findMany).toHaveBeenCalledWith({
      where: {
        name: {
          contains: 'test',
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: 0,
      take: 10,
    });

    expect(result).toEqual(orders);
  });

  it('should list orders by hour', async () => {
    const req = {
      page: undefined,
      limit: undefined,
      search: '',
      listBy: 'hour' as const,
    };

    const orders = [
      {
        id: "1",
        name: 'Test Order',
        createdAt: new Date(),
      },
    ];

    (p.order.findMany as jest.Mock).mockResolvedValueOnce(orders);

    const result = await listOrderService.execute(req);

    expect(p.order.findMany).toHaveBeenCalledWith({
      orderBy: {
        createdAt: 'desc',
      },
      skip: 0,
      take: 10,
    });

    expect(result).toEqual(orders);
  });

  it('should list orders by date', async () => {
    const req = {
      page: undefined,
      limit: undefined,
      search: '',
      listBy: 'date' as const,
    };

    const orders = [
      {
        id: 1,
        name: 'Test Order',
        createdAt: new Date(),
      },
    ];

    (p.order.findMany as jest.Mock).mockResolvedValueOnce(orders);

    const result = await listOrderService.execute(req);

    expect(p.order.findMany).toHaveBeenCalledWith({
      orderBy: {
        createdAt: 'desc',
      },
      skip: 0,
      take: 10,
    });

    expect(result).toEqual(orders);
  });
});