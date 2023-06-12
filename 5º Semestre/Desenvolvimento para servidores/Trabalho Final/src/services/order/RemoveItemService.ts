//* Libraries imports

//* Local imports
import p from "../../prisma";
import type { RemoveItemRequest } from "../../controllers/order/RemoveItemController";

export default class RemoveItemService {
  async execute({ orderId, itemId }: RemoveItemRequest) {
    const order = await p.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new Error("Order not found");
    }

    const item = await p.item.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      throw new Error("Item not found");
    }

    await p.item.delete({
      where: { id: itemId },
    });

    return { message: "Item removed successfully" };
  }
}
