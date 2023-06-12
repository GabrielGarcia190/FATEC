//* Libraries imports
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

//* Local imports
import p from "../../prisma";
import env from "../../variables";

type AuthRequest = {
  email: string;
  password: string;
};

export default class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await p.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new Error("Email/Password incorrect");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Email/Password incorrect");

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      token,
      user: {
        name: user.name,
        email: user.email,
        id: user.id,
      },
    };
  }
}
