import prismaClient from "../../../prisma/src";
import { hash } from "bcryptjs";

interface ICardRequest {
    nome_cartao: string,
    numero_cartao: string,
    data_validade: string,
    CPF_cartao: string,
    ccv: string,
}

class CreateCardService {
    async execute({ nome_cartao, numero_cartao, data_validade, CPF_cartao, ccv }: ICardRequest) {
       if(!nome_cartao || !numero_cartao || !data_validade || !CPF_cartao || !ccv){
          return("Missing information")
       }

       const CardAlreadyExists = await prismaClient.cartaoCredito.findFirst({
              where: {
                nome_cartao: nome_cartao,
              }
       })

       if(CardAlreadyExists){
          return("Card already exists");
       }

       const ccv_Hash = await hash(ccv, 8);
       const card = await prismaClient.cartaoCredito.create({
        data:{
            numero_cartao,
            nome_cartao,
            CPF_cartao,
            data_validade,
            ccv: ccv_Hash,
        },
        select:{
            id: true,
            numero_cartao: true,
            nome_cartao: true,
            CPF_cartao: true,
            data_validade: true,
        }
    })

    return {cartão: card };
    
    }
}
export { CreateCardService }	