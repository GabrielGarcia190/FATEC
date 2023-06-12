//* Libraries imports

//* Local imports
import type { CloseOrderRequest } from "../../controllers/order/CloseOrderController";
import p from "../../prisma";

export default class CloseOrderService {
  async execute({ id }: CloseOrderRequest) {
    //* Check if order exists, grab all the items and calculate the total price
    const order = await p.order.findUnique({
      where: {
        id,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!order) {
      return {
        error: "Order not found",
      };
    }

    if (order.status !== "OPEN") {
      return {
        error: "Order is not open",
      };
    } else {
      await p.order.update({
        where: {
          id,
        },
        data: {
          status: "CLOSED",
        },
      });
    }

    const totalPrice = order.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    return {
      order,
      totalPrice,
    };
  }
}
