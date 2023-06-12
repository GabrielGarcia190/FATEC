//* Libraries imports
import type { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import z from "zod";

//* Local imports
import env from "../variables";
import type { AuthenticatedRequest } from "../@types/AuthenticatedRequest";

const authorizationSchema = z.string().nonempty();

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let authorization: string;
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader)
      return res.status(401).json({ error: "Unauthorized" }).end();
    authorization = authorizationHeader;
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Unauthorized" }).end();
  }

  if (!authorization)
    return res.status(401).json({ error: "Unauthorized" }).end();

  const authorizationValidated = authorizationSchema.parse(authorization);

  const [, token] = authorizationValidated.split(" ");

  if (!token) return res.status(401).json({ error: "Unauthorized" }).end();

  try {
    const { sub } = verify(token, env.JWT_SECRET);

    if (!sub) return res.status(401).json({ error: "Unauthorized" }).end();

    console.log(sub);
    console.log("User authenticated");

    const subString = typeof sub === "string" ? sub : sub.toString();

    (req as AuthenticatedRequest).user_id = subString;

    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Unauthorized" }).end();
  }
}
