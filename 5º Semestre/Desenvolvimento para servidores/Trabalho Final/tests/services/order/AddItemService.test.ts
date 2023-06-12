import AddItemService from '../../../src/services/order/AddItemService';
import prisma from '../../../src/prisma';

jest.mock('../../../src/prisma', () => ({
  item: {
    create: jest.fn(),
  },
}));

describe('AddItemService', () => {
  let addItemService: AddItemService;

  beforeEach(() => {
    addItemService = new AddItemService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create a new item', async () => {
    const request = {
      quantity: 2,
      orderId: "1",
      productId: "1",
    };

    const item = {
      id: "1",
      quantity: request.quantity,
      orderId: request.orderId,
      productId: request.productId,
    };

    (prisma.item.create as jest.Mock).mockResolvedValueOnce(item);

    const result = await addItemService.execute(request);

    expect(prisma.item.create).toHaveBeenCalledTimes(1);
    expect(prisma.item.create).toHaveBeenCalledWith({
      data: {
        quantity: request.quantity,
        orderId: request.orderId,
        productId: request.productId,
      },
    });
    expect(result).toEqual(item);
  });
});