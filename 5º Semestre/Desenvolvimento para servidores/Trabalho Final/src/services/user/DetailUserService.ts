//* Libraries imports
import p from "../../prisma";

export default class DetailUserService {
  async execute(user_id: string) {
    const user = await p.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) throw new Error("User not found");

    return user;
  }
}
