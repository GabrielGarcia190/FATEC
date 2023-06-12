//* Libraries imports
import type { Order } from "@prisma/client";

//* Local imports
import p from "../../prisma";
import type { ListOrderRequest } from "../../controllers/order/ListOrderController";

export default class ListOrderService {
  async execute(req: ListOrderRequest) {
    const page = Number(req.page || 1);
    const limit = Number(req.limit || 10);
    const search = req.search || "";
    const listBy = req.listBy || "name";

    let orders: Order[] = [];

    if (listBy === "hour") {
      //* list by hour
      orders = await p.order.findMany({
        orderBy: {
          createdAt: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      });
    }

    if (listBy === "date") {
      //* list by date
      orders = await p.order.findMany({
        orderBy: {
          createdAt: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      });
    }

    if (listBy === "name") {
      //* list by name
      orders = await p.order.findMany({
        where: {
          name: {
            contains: search,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      });
    }

    return orders;
  }
}
