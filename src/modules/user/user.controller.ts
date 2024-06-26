import { Request, Response } from "express";
import userService from "./user.service";

class UserController {
  async createUser(req: Request, res: Response) {
    const { email, password, name } = req.body;

    await userService.createUser({ email, password, name });

    return res.status(201).send();
  }

  async getUserByEmail(req: Request, res: Response) {
    const { email } = req.params;

    const user = await userService.getUserByEmail(email);

    return res.status(200).json(user);
  }
}

export default new UserController();
