import prismaClient from "../../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

type AuthUserRequest = {
    email: string;
    senha: string;
}

class AuthUserService {
    async execute({ email, senha }: AuthUserRequest) {
        const user = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        });

        if (!user) {
            return { Error: "Email/Password incorrect" }
        }

        const passwordMatch = await compare(senha, user.senha);

        if (!passwordMatch) {
            return { Error: "Email/Password incorrect (Fodeo)" }
        }
        const token = sign(
            {
                nome: user.nome,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn:"30d"
            }
        )
        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            token: token
        }
    }

}

export { AuthUserService }