import prismaClient from "../../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    nome: string;
    email: string;
    senha: string;
}


class CreateUserService {
    async execute({ nome, email, senha }: UserRequest) {

        if (!email) {
            throw new Error("Email não enviado! ");
        }

        const UserAlreadyExists = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (UserAlreadyExists) {
            throw new Error("Email já exites")
        }

        const passwordHash = await hash(senha, 8);
        const user = await prismaClient.usuario.create({
            data: {
                nome,
                email,
                senha: passwordHash,
            },
            select:
            {
                id: true,
                nome: true,
                email: true,
            }
        })
        return { usuario: nome }
    }
}

export { CreateUserService }