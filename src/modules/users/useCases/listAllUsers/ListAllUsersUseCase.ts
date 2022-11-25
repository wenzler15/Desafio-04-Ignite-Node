/* eslint-disable prettier/prettier */

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id?: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      return null;
    }

    if (user.admin === false) {
      throw Object.assign(new Error("User not admin!"), { statusCode: 400 }, { data: { error: true } });
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
