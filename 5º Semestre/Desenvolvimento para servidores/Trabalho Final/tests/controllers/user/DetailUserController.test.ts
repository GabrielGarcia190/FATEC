//* Type imports
import type { Request, Response } from "express";
import type { AuthenticatedRequest } from "../../../src/@types/AuthenticatedRequest";

//* Local imports
import DetailUserController from "../../../src/controllers/user/DetailUserController";

//* Mock
jest.mock("../../../src/services/user/DetailUserService", () => {
  return jest.fn().mockImplementation(() => {
    return {
      execute: jest.fn().mockResolvedValue({
        id: 1,
        name: "John Doe",
        email: "john.doe@gmail.com",
      }),
    };
  });
});

describe("DetailUserController testing suite", () => {
  it("Should return user details", async () => {
    const req = {
      user_id: 1,
    } as unknown as Request;

    const res = {
      json: jest.fn(),
    } as unknown as Response;

    const detailUserController = new DetailUserController();

    await detailUserController.handle(req, res);

    expect(res.json).toHaveBeenCalledWith({
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
    });
  });
});