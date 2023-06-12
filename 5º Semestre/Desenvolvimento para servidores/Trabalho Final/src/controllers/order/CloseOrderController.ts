//* Libraries imports
import type { Request, Response } from 'express';
import z from 'zod';

//* Services imports
import CloseOrderService from '../../services/order/CloseOrderService';

const closeOrderRequest = z.object({
  id: z.string(),
});

export type CloseOrderRequest = z.infer<typeof closeOrderRequest>;

export default class CloseOrderController {
  async handle(request: Request, response: Response) {
    const closeOrder = closeOrderRequest.safeParse(request.body);

    if(!closeOrder.success) {
      return response.status(400).json(closeOrder.error);
    }

    const closeOrderService = new CloseOrderService();

    const order = await closeOrderService.execute(closeOrder.data);

    return response.json(order);
  }
}