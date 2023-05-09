import { response } from "express";
import prismaClient from "../../../prisma";

interface CaregotyRequest {
    nome: string;
}

class CreateCategoryService {
    async execute({ nome }: CaregotyRequest) {
        if (nome == "") {
            return response.json({ error: "Nome não pode ser vazio" });
        }
        const category = await prismaClient.categoria.create({
            data: {
                nome
            },
            select: {
                id: true,
                nome: true,
            }
        });
        return category;
    }
}
export { CreateCategoryService }