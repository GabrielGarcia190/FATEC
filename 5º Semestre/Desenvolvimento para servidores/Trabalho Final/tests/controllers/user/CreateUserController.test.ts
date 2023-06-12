//* Libraries imports
import type { Request, Response } from "express";

//* Controllers imports
import CreateUserController from "../../../src/controllers/user/CreateUserController";

// Mock do serviço CreateUserService
jest.mock("../../../src/services/user/CreateUserService", () => {
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

describe("CreateUserController", () => {
  it("should create a new user", async () => {
    const req = {
      body: {
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
      },
    };
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    const createUserController = new CreateUserController();
    await createUserController.handle(req as Request, res);

    expect(res.json).toBeCalledWith({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    });
  });

  it("should return an error for invalid credentials", async () => {
    const req = {
      body: {
        name: "admin",
        email: "john@example.com",
        password: "password123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const createUserController = new CreateUserController();
    await createUserController.handle(req as Request, res);

    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      error: "Invalid credentials",
      details: [
        {
          code: "custom",
          path: ["name"],
          message: "Name cannot be admin",
        },
      ],
    });
  });

  it("should return an error for name too short", async () => {
    const req = {
      body: {
        name: "a",
        email: "john@example.com",
        password: "password123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const createUserController = new CreateUserController();
    await createUserController.handle(req as Request, res);

    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      error: "Invalid credentials",
      details: [
        {
          code: "too_small",
          exact: false,
          inclusive: true,
          message: "Name must be at least 3 characters long",
          minimum: 3,
          path: ["name"],
          type: "string",
        },
      ],
    });
  });
});
