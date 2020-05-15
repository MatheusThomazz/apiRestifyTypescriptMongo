"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const router_1 = require("../common/router");
const users_model_1 = require("./users.model");
class UsersRouter extends router_1.Router {
    appyRoutes(application) {
        application.get('/users', (req, resp, next) => {
            users_model_1.Users.findAll().then(users => {
                resp.json(users);
                return next();
            });
        });
    }
}
exports.usersRouter = new UsersRouter();
