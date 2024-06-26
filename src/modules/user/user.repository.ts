import { Prisma } from "@prisma/client";
import { User } from "../../models/user";
import { prisma } from "../../infra/db.prisma";

export class UserRepository {
  async createUser(data: User) {
    await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    });
  }

  async getUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export default new UserRepository();
