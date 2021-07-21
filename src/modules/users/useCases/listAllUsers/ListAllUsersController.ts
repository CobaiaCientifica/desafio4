import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    if (Array.isArray(user_id)) {
      [user_id] = user_id;
    }
    try {
      const data = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(data).send();
    } catch (err) {
      return response.status(400).json({ error: err }).send();
    }
  }
}

export { ListAllUsersController };
