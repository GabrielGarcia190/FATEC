//* Libraries imports

//* Local imports
import type { SendOrderQuery } from "../../controllers/order/SendOrderController";
import p from "../../prisma";

export default class SendOrderService {
  async execute({ id }: SendOrderQuery) {
    try {
      const order = await p.order.update({
        where: {
          id,
        },
        data: {
          draft: false,
        },
      });
      
      return order;
    } catch (error) {
      return {
        error: "An error occurred while sending the order",
      };
    }
  }
}
