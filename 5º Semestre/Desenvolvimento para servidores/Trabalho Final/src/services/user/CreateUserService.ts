//* Libraries imports
import { hash } from "bcryptjs";

//* Local imports
import p from "../../prisma";

import type { UserZod } from "../../controllers/user/CreateUserController";

export default class CreateUserService {
  public async execute({ email, name, password }: UserZod) {
    //* verify if the user already exists
    const userAlreadyExists = await p.user.findFirst({
      where: {
        email,
      },
    });

    // if (userAlreadyExists) throw new Error("User already exists");
    if (userAlreadyExists) return "User already exists";

    const passwordHash = await hash(password, 8);

    //* create the user
    const user = await p.user.create({
      data: {
        email,
        name,
        password: passwordHash,
        role: "user",
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}
