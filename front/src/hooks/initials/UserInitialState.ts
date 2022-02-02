import User from "../entities/User";
import UserInterface from "../interfaces/UserInterface";

const userInitialState: UserInterface = {
  user: new User("elkarouani@gmail.com"),
};

export default userInitialState;