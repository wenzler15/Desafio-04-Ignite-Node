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

    console.log("useCase", params);


    const user = this.showUserProfileUseCase.execute(params);

    if (!user) {
      return response.status(404).json({ error: true })
    }

    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
