import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const data = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(201).json(data).send();
    } catch (err) {
      return response.status(404).json({ error: err }).send();
    }
  }
}

export { TurnUserAdminController };
