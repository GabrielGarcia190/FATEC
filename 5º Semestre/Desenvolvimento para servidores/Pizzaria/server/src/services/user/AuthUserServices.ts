import prismaClient from "../../../prisma";
import { compare } from "bcryptjs";

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
            
            return{ Error: "Email/Password incorrect"}
        }

        const passwordMatch = await compare(senha, user.senha);

        if (!passwordMatch) {
            return{ Error: "Email/Password incorrect (Fodeo)"}
        }

        return { ok: "Ai sim ein rei..." }
    }

}

export { AuthUserService }