import RemoveOrderService from '../../../src/services/order/RemoveOrderService';
import p from '../../../src/prisma';

jest.mock('../../../src/prisma', () => {
  return {
    order: {
      delete: jest.fn(),
    },
  };
});

describe('RemoveOrderService', () => {
  let removeOrderService: RemoveOrderService;

  beforeEach(() => {
    removeOrderService = new RemoveOrderService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should remove order', async () => {
    const req = {
      id: "1",
    };

    (p.order.delete as jest.Mock).mockResolvedValueOnce({ id: "1" });

    const result = await removeOrderService.execute(req);

    expect(p.order.delete).toHaveBeenCalledWith({
      where: {
        id: "1",
      },
    });

    expect(result).toEqual({ id: "1" });
  });
});