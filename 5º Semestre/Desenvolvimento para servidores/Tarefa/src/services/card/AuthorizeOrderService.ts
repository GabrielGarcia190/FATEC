import prismaClient from "../../../prisma/src"

class AuthorizeOrderService {
    async execute(card_id: string) {
        const card = prismaClient.cartaoCredito.findFirst({
            where: {
                id: card_id
            },
            select: {
                id: true,
                nome_cartao: true,
                CPF_cartao: true,
                numero_cartao: true,
            }
        });


        return card;
    }
}

export { AuthorizeOrderService }