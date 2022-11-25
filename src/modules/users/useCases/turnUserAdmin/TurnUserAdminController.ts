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

    if (!user) return response.status(404).json({ error: true });

    return response.status(200).json(user);
  }
}

export { TurnUserAdminController };
