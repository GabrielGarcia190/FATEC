//* Libraries imports
import type { Request, Response } from "express";
import z from "zod";

//* Local imports
import OrderDetailsService from "../../services/order/OrderDetailsService";

const orderDetailsSchema = z.object({
  id: z.string().uuid(),
});

export type OrderDetailsRequest = z.infer<typeof orderDetailsSchema>;

export default class OrderDetailsController {
  async handle(req: Request, res: Response) {
    const request = orderDetailsSchema.safeParse(req.query);

    if (!request.success) {
      return res.status(400).json({ error: request.error });
    }

    const orderDetailsService = new OrderDetailsService();

    const orderDetails = await orderDetailsService.execute(request.data);

    return res.json(orderDetails);
  }
}
