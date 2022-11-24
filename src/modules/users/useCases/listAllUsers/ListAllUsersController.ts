/* eslint-disable prettier/prettier */

import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const user_id = request.query;

    const params = {
      user_id: String(user_id)
    }

    const users = this.listAllUsersUseCase.execute(params)

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
