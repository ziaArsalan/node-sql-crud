/**
 * Created by ideabox on 08/09/2019.
 */

 const User = require("../database/models/User");
 
 class UserController {
 
     constructor() {
 
         this.model      = new User();
         this.getUsers   = this.getUsers.bind(this);
         this.createUser = this.createUser.bind(this);
         this.getUser    = this.getUser.bind(this);
     }
 
     async getUsers(req, res, next){
        try {
            let users = await this.model.getUsers();

            if (users) {
                res.json({
                    success: true,
                    data: {
                        users: users
                    }
                })
            } else {
                throw new Error('error creating user')
            }
        } catch (ex) {
            console.log(ex);
            next(err)
        } 
     }

     async createUser(req, res, next) {
         try {
             const user = req.body;

             let newUser = await this.model.addUser(user);
 
             if (newUser) {
                 res.json({
                     success: true,
                     data: {
                         user: newUser
                     }
                 })
             } else {
                 throw new Error('error creating user')
             }
         } catch (ex) {
             console.log(ex);
             next(err)
         }
 
     }

     async getUser(req, res, next) {
        try {

            let id = req.params.id ? parseInt(req.params.id) : 0;

            let user = await this.model.getUserById(id);

            if (user) {
                res.json({
                    success: true,
                    data: user.toJSON()
                })
            } else {
                throw new Error('error getting user')
            }
        } catch (err) {
            // let err = httpError(req, res, next, "ROM500001");
            next(err)
        }
    }

 }
 
 
 module.exports = UserController;
 