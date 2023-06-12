//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import ListOrderService from "../../services/order/ListOrderService";

const ListOrderSchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
  search: z.string().optional(),
  listBy: z.enum(["name", "date", "hour"]).optional(),
});

export type ListOrderRequest = z.infer<typeof ListOrderSchema>;

export default class ListOrderController {
  async handle(request: Request, response: Response) {
    try {
      const { page, limit, search, listBy } = ListOrderSchema.parse(
        request.query
      );

      const listOrderService = new ListOrderService();

      const orders = await listOrderService.execute({
        page,
        limit,
        search,
        listBy,
      });

      return response.json(orders);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({ error: error.issues });
      } else {
        if (error instanceof Error) {
          return response.status(500).json({ error: error.message });
        }
        return response.status(500).json({ error: error });
      }
    }
  }
}
