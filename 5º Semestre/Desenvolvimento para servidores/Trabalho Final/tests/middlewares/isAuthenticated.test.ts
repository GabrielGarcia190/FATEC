import isAuthenticated from '../../src/middlewares/isAuthenticated';
import type { Request, Response, NextFunction } from 'express';
import { verify } from "jsonwebtoken";
import env from "../../src/variables";

jest.mock('jsonwebtoken');

describe('isAuthenticated', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      //@ts-ignore
      status: jest.fn(() => mockResponse),
      //@ts-ignore
      json: jest.fn(() => mockResponse),
      end: jest.fn(),
    };
  });

  test('should return 401 if no authorization header', () => {
    isAuthenticated(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
  });

  test('should return 401 if authorization header does not contain token', () => {
    mockRequest.headers = { authorization: 'Bearer ' };
    
    isAuthenticated(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
  });

  test('should return 401 if token is invalid', () => {
    mockRequest.headers = { authorization: 'Bearer invalid_token' };

    (verify as jest.Mock).mockImplementation(() => {
      throw new Error();
    });

    isAuthenticated(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
  });

  test('should call next function if token is valid', () => {
    const sub = 'user_id';
    mockRequest.headers = { authorization: `Bearer valid_token` };

    (verify as jest.Mock).mockReturnValue({ sub });

    isAuthenticated(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(verify).toHaveBeenCalledWith('valid_token', env.JWT_SECRET);
    //@ts-ignore
    expect(mockRequest.user_id).toBe(sub);
    expect(nextFunction).toHaveBeenCalled();
  });
});
