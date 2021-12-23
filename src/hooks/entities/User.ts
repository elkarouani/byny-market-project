export default class User {
    email: string;
    isAuthenticated: boolean;

    constructor(email: string) {
        this.email = email;
        this.isAuthenticated = false;
    }
}