import prismaClient from "../../../prisma";

class ListCategoryService {
    public async execute() {
        const categories = await prismaClient.categoria.findMany({
            select: {
                id: true,
                nome: true,
            },
        });

        return categories;
    }
}

export { ListCategoryService }