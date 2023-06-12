//* Libraries imports

//* Local imports
import type { ProductToAdd } from "../../controllers/product/CreateProductController";
import p from "../../prisma";

export default class CreateProductService {
  async execute(props: ProductToAdd) {
    if (!props.banner || props.banner === "")
      throw new Error("Banner is missing");
    const product = await p.product.create({
      data: {
        name: props.name,
        description: props.description,
        price: Number(props.price),
        categoryId: props.categoryId,
        banner: props.banner,
      },
    });

    return product;
  }
}
