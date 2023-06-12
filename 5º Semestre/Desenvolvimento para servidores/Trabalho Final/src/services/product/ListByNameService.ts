//* Libraries imports
import z from "zod";
//* Local imports
import p from "../../prisma";
import type { ListByName } from "../../controllers/product/ListByNameController";

export default class ListByNameService {
  async execute({ name }: ListByName) {
    const products = await p.product.findMany({
      where: {
        name: {
          contains: name,
        }
      },
    });

    return products;
  }
}
