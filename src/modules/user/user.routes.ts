import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter.post("/", userController.createUser);
userRouter.get("/:email", userController.getUserByEmail);

export default userRouter;
