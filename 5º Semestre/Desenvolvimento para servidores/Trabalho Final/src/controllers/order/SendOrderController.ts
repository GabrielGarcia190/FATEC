//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import SendOrderService from "../../services/order/SendOrderService";

const sendOrderSchema = z.object({
  id: z.string(),
});

export type SendOrderQuery = z.infer<typeof sendOrderSchema>;

export default class SendOrderController {
  async handle(request: Request, response: Response) {
    const query = sendOrderSchema.safeParse(request.body);

    if (!query.success) {
      return response.status(400).json({ error: query.error });
    }

    const sendOrderService = new SendOrderService();

    const order = await sendOrderService.execute(query.data);

    return response.json(order);
  }
}
