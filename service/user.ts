class UserService {
    userDAO: any;

    constructor(userDAO) {
        this.userDAO = userDAO;
    }

    createUser(name, login, hashPassword) {
        return this.userDAO.createUser(name, login, hashPassword);
    }

    getUsers() {
        return this.userDAO.getUsers();
    }

    getOneUser(id) {
        return this.userDAO.getOneUser(id);
    }

    updateUser(id, { name, login, password }) {
        return this.userDAO.updateUser(id, { name, login, password });
    }

    deleteUser(id) {
        return this.userDAO.deleteUser(id);
    }

    loginVerification(login) {
        return this.userDAO.loginVerification(login);
    }
}

export { UserService };
