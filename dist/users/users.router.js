"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const router_1 = require("../common/router");
const users_model_1 = require("./users.model");
class UsersRouter extends router_1.Router {
    appyRoutes(application) {
        //retorna todos os users
        application.get('/users', (req, resp, next) => {
            users_model_1.Users.findAll().then(users => {
                resp.json(users);
                return next();
            });
        });
        //retorna 1 user por id
        application.get('/users/:id', (req, resp, next) => {
            users_model_1.Users.findById(req.params.id).then(user => {
                if (user) {
                    resp.json(user);
                    return next();
                }
                else {
                    resp.send(404);
                    return next();
                }
            });
        });
    }
}
exports.usersRouter = new UsersRouter();
