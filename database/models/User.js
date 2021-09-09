let db = require('../db');

class User {

    constructor() {
        this.model = db.User;
    }

    async getUsers() {
        try {
            return await this.model.findAll()
        } catch (error) {
            return error
        }
    }

    async addUser(user) {

        try {
            const newUser = await this.model.create(user);
            return newUser;
        } catch (ex) {
            console.log('Creating New User ERROR - ',ex);
            return null;
        }
    }

    async getUserById(id) {
        try {

            let user = await this.model.findOne({
                where: { id: id }
            })

            if (user) {
                return user;
            } else {
                return null;
            }
        } catch (ex) {
            return null;
        }
    }

}

module.exports = User;
