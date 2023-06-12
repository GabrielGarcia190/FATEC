//* Local imports
import p from "../../prisma";

export default class ListCategoryService {
  public async execute() {
    const categories = await p.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return categories;
  }
}
