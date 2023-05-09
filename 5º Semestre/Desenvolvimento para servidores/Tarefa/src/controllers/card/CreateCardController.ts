import { Request, Response } from "express";
import { CreateCardService } from "../../services/card/CreateCardService";

class CreateCardController{
    async handle(request: Request, response: Response){

        const {nome_cartao, numero_cartao, data_validade, CPF_cartao, ccv} = request.body;

        const createCardService = new CreateCardService();
        const card = await createCardService.execute({nome_cartao, numero_cartao, data_validade, CPF_cartao, ccv});

        return response.json(card)
    }
}

export { CreateCardController }