//* Libraries imports
import type { Request, Response } from "express";

//* Local imports
import DetailUserService from "../../services/user/DetailUserService";

//* Types imports
import type { AuthenticatedRequest } from "../../@types/AuthenticatedRequest";
export default class DetailUserController {
  async handle(req: Request, res: Response) {
    const user_id = (req as AuthenticatedRequest).user_id;

    console.log("user id: ", user_id);

    const detailUserService = new DetailUserService();
    const user = await detailUserService.execute(user_id);

    return res.json(user);
  }
}
