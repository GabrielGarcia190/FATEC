//* Libraries imports

//* Local imports
import p from "../../prisma";

//* Types imports
import type { CategoryZod } from "../../controllers/category/CreateCategoryController";

export default class CreateCategoryService {
  public async execute({ name }: CategoryZod) {
    const category = await p.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
