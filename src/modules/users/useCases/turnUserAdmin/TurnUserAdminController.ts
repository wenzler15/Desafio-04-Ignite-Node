/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const params = {
      user_id
    }

    const user = this.turnUserAdminUseCase.execute(params);

    return response.status(200).json(user);
  }
}

export { TurnUserAdminController };
