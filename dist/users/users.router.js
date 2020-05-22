"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const router_1 = require("../common/router");
const restify_errors_1 = require("restify-errors");
const users_model_1 = require("./users.model");
class UsersRouter extends router_1.Router {
    constructor() {
        super();
        this.on('beforeRender', document => {
            document.password = undefined;
            //delete document.password
        });
    }
    appyRoutes(application) {
        application.get('/users', (req, resp, next) => {
            users_model_1.User.find().then(this.render(resp, next));
        });
        application.get('/users/:id', (req, resp, next) => {
            users_model_1.User.findById(req.params.id)
                .then(this.render(resp, next))
                .catch(next);
        });
        application.post('/users', (req, resp, next) => {
            let user = new users_model_1.User(req.body);
            user.save().then(this.render(resp, next))
                .catch(next);
        });
        application.put('/users/:id', (req, resp, next) => {
            const options = { overwrite: true };
            users_model_1.User.update({ _id: req.params.id }, req.body, options)
                .exec().then(result => {
                if (result.n) {
                    return users_model_1.User.findById(req.params.id).exec();
                }
                else {
                    throw new restify_errors_1.NotFoundError('Documento nao encontrado');
                }
            }).then(this.render(resp, next))
                .catch(next);
        });
        application.patch('/users/:id', (req, resp, next) => {
            const options = { new: true };
            users_model_1.User.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp, next))
                .catch(next);
        });
        application.del('/users/:id', (req, resp, next) => {
            users_model_1.User.remove({ _id: req.params.id }).exec().then((cmdResult) => {
                if (cmdResult.result.n) {
                    resp.send(204);
                }
                else {
                    throw new restify_errors_1.NotFoundError('Documento nao encontrado');
                }
                return next();
            })
                .catch(next);
        });
    }
}
exports.usersRouter = new UsersRouter();
