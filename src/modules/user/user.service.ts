import { User } from "../../models/user";
import { CreateUserDTO } from "./DTOs/createUserDTO";
import userRepository from "./user.repository";

class UserService {
  async createUser(data: CreateUserDTO) {
    const createdUser = new User(data.email, data.password, data.name);
    await userRepository.createUser(createdUser);
  }

  async getUserByEmail(email: string) {
    return await userRepository.getUserByEmail(email);
  }
}

export default new UserService();
