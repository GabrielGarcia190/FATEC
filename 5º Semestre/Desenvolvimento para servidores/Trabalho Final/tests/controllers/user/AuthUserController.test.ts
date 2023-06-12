import AuthUserController from "../../../src/controllers/user/AuthUserController";
import type { Request, Response } from "express";

// Mock do serviço AuthUserService
jest.mock("../../../src/services/user/AuthUserService", () => {
  return jest.fn().mockImplementation(() => {
    return {
      execute: jest.fn().mockResolvedValue({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      }),
    };
  });
});

describe("AuthUserController", () => {
  it("should authenticate a user", async () => {
    const req = {
      body: { email: "john@example.com", password: "password123" },
    };
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    const authUserController = new AuthUserController();
    await authUserController.handle(req as Request, res);

    expect(res.json).toBeCalledWith({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    });
  });
});
