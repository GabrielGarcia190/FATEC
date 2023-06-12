//* Libraries imports

//* Local imports
import type { CreateOrderType } from "../../controllers/order/CreateOrderController";
import p from "../../prisma";

export default class CreateOrderService {
  async execute({ table, name }: CreateOrderType) {
    const order = await p.order.create({
      data: {
        table,
        name,
      },
    });

    return order;
  }
}
