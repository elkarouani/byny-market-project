import User from "../entities/User";

export default interface UserInterface {
    isAuthenticated: boolean;
    user: User;
    loading: boolean;
    error: Error;
}