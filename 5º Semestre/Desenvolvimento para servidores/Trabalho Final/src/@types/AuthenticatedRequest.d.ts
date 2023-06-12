import type { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user_id: string;
}