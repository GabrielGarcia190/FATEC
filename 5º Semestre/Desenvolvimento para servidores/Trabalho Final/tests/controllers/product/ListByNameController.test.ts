import ListByNameController from "../../../src/controllers/product/ListByNameController";
import type { Request, Response } from "express";
import ListByNameService from "../../../src/services/product/ListByNameService";

jest.mock("../../../src/services/product/ListByNameService");

describe("ListByNameController", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let listByNameController: ListByNameController;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      // @ts-ignore
      json: jest.fn(() => mockResponse),
      // @ts-ignore
      status: jest.fn(() => mockResponse),
      end: jest.fn(),
    };
    listByNameController = new ListByNameController();
  });

  test("should return a list of products if name is valid", async () => {
    const products = [
      { id: "1", name: "Product 1" },
      { id: "2", name: "Product 2" },
    ];
    const name = "Product";
    mockRequest.query = { name };

    (ListByNameService as jest.Mock).mockImplementation(() => {
      return {
        execute: jest.fn().mockResolvedValue(products),
      };
    });

    await listByNameController.handle(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(mockResponse.json).toHaveBeenCalledWith(products);
  });

  test("should return status 400 if name is not valid", async () => {
    mockRequest.query = {};

    await listByNameController.handle(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalled();
  });

  test("should return status 500 if service throws an error", async () => {
    const name = "Product";
    mockRequest.query = { name };

    (ListByNameService as jest.Mock).mockImplementation(() => {
      return {
        execute: jest.fn().mockRejectedValue(new Error()),
      };
    });

    await listByNameController.handle(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: "Server error" });
  });
});
