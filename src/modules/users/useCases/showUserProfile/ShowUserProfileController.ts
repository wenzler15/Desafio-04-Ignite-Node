/* eslint-disable prettier/prettier */

import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const params = {
      user_id
    };

    const user = this.showUserProfileUseCase.execute(params);

    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
