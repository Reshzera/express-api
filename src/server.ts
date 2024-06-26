import express, { json } from "express";
import userRouter from "./modules/user/user.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(json());

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

console.log(process.env.DATABASE_URL);
