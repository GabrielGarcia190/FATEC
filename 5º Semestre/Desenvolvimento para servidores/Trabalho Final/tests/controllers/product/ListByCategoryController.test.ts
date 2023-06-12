import ListByCategoryController from "../../../src/controllers/product/ListByCategoryController";
import type { Request, Response } from "express";
import ListByCategoryService from "../../../src/services/product/ListByCategoryService";

jest.mock("../../../src/services/product/ListByCategoryService");

describe("ListByCategoryController", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let listByCategoryController: ListByCategoryController;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      // @ts-ignore
      json: jest.fn(() => mockResponse),
      // @ts-ignore
      status: jest.fn(() => mockResponse),
      end: jest.fn(),
    };
    listByCategoryController = new ListByCategoryController();
  });

  test("should return a list of products if id_category is valid", async () => {
    const products = [
      { id: "1", name: "Product 1" },
      { id: "2", name: "Product 2" },
    ];
    const id_category = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    mockRequest.query = { id_category };

    (ListByCategoryService as jest.Mock).mockImplementation(() => {
      return {
        execute: jest.fn().mockResolvedValue(products),
      };
    });

    await listByCategoryController.handle(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(mockResponse.json).toHaveBeenCalledWith(products);
  });

  test("should return status 400 if id_category is not valid", async () => {
    mockRequest.query = {};

    await listByCategoryController.handle(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalled();
  });

  test("should return status 500 if service throws an error", async () => {
    const id_category = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    mockRequest.query = { id_category };

    (ListByCategoryService as jest.Mock).mockImplementation(() => {
      return {
        execute: jest.fn().mockRejectedValue(new Error()),
      };
    });

    await listByCategoryController.handle(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: "Server error" });
  });
});
