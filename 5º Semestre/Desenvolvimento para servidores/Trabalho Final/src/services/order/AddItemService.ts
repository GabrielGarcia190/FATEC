//* Libraries imports

//* Local imports
import type { AddItemRequest } from "../../controllers/order/AddItemController";
import p from "../../prisma";

export default class AddItemService {
  async execute({ quantity, orderId, productId }: AddItemRequest) {
    const item = await p.item.create({
      data: {
        quantity,
        orderId,
        productId,
      },
    });

    return item;
  }
}
