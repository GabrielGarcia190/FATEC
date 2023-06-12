import CreateCategoryService from '../../../src/services/category/CreateCategoryService';
import p from '../../../src/prisma';

jest.mock('../../../src/prisma', () => ({
  category: {
    create: jest.fn(),
  },
  $disconnect: jest.fn(),
}));

describe('CreateCategoryService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await p.$disconnect();
  });

  it('should create a new category', async () => {
    const categoryData = {
      name: 'Test Category',
    };

    const mockCategory = {
      id: 1,
      name: categoryData.name,
    };

    (p.category.create as jest.Mock).mockResolvedValueOnce(mockCategory);

    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(categoryData);

    expect(category).toHaveProperty('id', mockCategory.id);
    expect(category).toHaveProperty('name', mockCategory.name);
    expect(p.category.create).toHaveBeenCalledWith({
      data: {
        name: categoryData.name,
      },
      select: {
        id: true,
        name: true,
      },
    });
  });
});