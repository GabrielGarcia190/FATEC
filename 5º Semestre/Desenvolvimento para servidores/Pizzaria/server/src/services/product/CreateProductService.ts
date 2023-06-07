import prismaClient from "../../../prisma";

interface ProductRequest {
    nome: string;
    preco: string;
    descricao: string;
    banner: string;
    id_categoria: string;
}

class CreateProductService {
    async execute({ nome, preco, descricao, banner, id_categoria }: ProductRequest) {
        const product = await prismaClient.produto.create({
            data: {
                nome,
                preco,
                descricao,
                banner,
                id_categoria
            }
        })
        return product;
    }
}

export { CreateProductService }