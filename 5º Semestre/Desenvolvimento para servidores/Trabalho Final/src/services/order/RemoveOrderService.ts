//* Libraries imports

//* Local imports
import p from "../../prisma";
import type { RemoveOrderDTO } from "../../controllers/order/RemoveOrderController";

export default class RemoveOrderService {
  async execute({ id }: RemoveOrderDTO) {
    const order = await p.order.delete({
      where: {
        id,
      },
    });

    return order;
  }
}
