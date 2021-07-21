import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    try {
      const data = this.createUserUseCase.execute({ email, name });
      return response.status(201).json(data).send();
    } catch (err) {
      return response.status(400).json({ error: err }).send();
    }
  }
}

export { CreateUserController };
