import ListCategoryService from '../../../src/services/category/ListCategoryService';
import prisma from '../../../src/prisma';

jest.mock('../../../src/prisma', () => ({
  category: {
    findMany: jest.fn(),
  },
}));

describe('ListCategoryService', () => {
  let listCategoryService: ListCategoryService;

  beforeEach(() => {
    listCategoryService = new ListCategoryService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return a list of categories', async () => {
    const categories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];

    (prisma.category.findMany as jest.Mock).mockResolvedValueOnce(categories);

    const result = await listCategoryService.execute();

    expect(prisma.category.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual(categories);
  });
});