import prismaClient from "../../../prisma";

interface UserRequest{
    nome: string;
    email: string;
    senha: string;
}


class CreateUserService{
    async execute({nome, email, senha}: UserRequest){

        if(!email){
            throw new Error("Email não enviado! ");
        }

        const UserAlreadyExists = await prismaClient.usuario.findFirst({
            where:{
                email: email
            }
        })

        if(UserAlreadyExists){
            throw new Error("Email já exites")
        }

        return {usuario: nome}
    }
}

export {CreateUserService}