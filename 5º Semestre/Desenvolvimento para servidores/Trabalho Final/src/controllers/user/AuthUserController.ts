//* Libraries imports
import type { Request, Response } from "express";

//* Local imports
import AuthUserService from "../../services/user/AuthUserService";

export default class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authUserService = new AuthUserService();

    const user = await authUserService.execute({ email, password });

    return response.json(user);
  }
}
