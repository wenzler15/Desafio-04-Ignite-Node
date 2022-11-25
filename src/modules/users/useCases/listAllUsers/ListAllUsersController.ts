/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */

import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id: id } = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id: String(id) });

      return response.status(200).json(users);
    }
    catch (error) {
      if (error === "Should not be able to a non existing user get list of all users") {
        return response.status(404).json({ error });
      } else {
        return response.status(400).json({ error });
      }
    }
  }
}

export { ListAllUsersController };
