import prismaClient from "../../../prisma/src";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

type AuthUserRequest = {
    numero_cartao: string;
    cvv: string;
}

const {JWT_SECRET} = process.env;

class AuthCardService {
    async execute({ numero_cartao, cvv }: AuthUserRequest) {
        const card = await prismaClient.cartaoCredito.findFirst({
            where: {
                numero_cartao,
            }
        });

        if (!card) {
            return { Error: "Card do not exits" }
        }
        console.log(card.ccv);
        console.log(cvv)
        const cardMatch = await compare(cvv, card.ccv);

        if (!cardMatch) {
            return { Error: "Clonando cartão, né pilantra...." }
        }
        const token = sign(
            {
                numero_cartao: card.numero_cartao,
                cvv: card.ccv
            },
            String(JWT_SECRET),
            {
                subject: card.id,
                expiresIn: "15m"
            }
        )
        return {
            id: card.id,
            CPF: card.CPF_cartao,
            cvv: cvv,
            token: token
        }
    }

}

export { AuthCardService }