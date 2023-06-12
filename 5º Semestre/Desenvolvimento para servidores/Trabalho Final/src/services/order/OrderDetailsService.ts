//* Libraries imports

//* Local imports
import type { OrderDetailsRequest } from "../../controllers/order/OrderDetailsController";
import p from "../../prisma";

export default class OrderDetailsService {
  //* Buscar e exibir todos os itens adicionados a um pedido.
  async execute({ id }: OrderDetailsRequest) {
    const order = await p.order.findUnique({
      where: { id }, //~ onde o id do pedido for igual ao id passado na requisição
      include: { //~ incluir
        items: { //~ os itens
          where: { orderId: id }, //~ onde o id do pedido for igual ao id passado na requisição
        },
      },
    });

    if (!order) { //~ se não encontrar o pedido
      return { error: "Order not found" };
    }

    return order;
  }
}
