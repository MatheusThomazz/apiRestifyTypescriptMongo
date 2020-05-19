"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const restify = require("restify");
const environment_1 = require("../common/environment");
const mongoose = require("mongoose");
class Server {
    initializeDB() {
        mongoose.Promise = global.Promise;
        return mongoose.connect(environment_1.environment.db.url, {
            useMongoClient: true
        });
    }
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'api-de-restaurantes',
                    version: '1.0.0'
                });
                this.application.use(restify.plugins.queryParser());
                this.application.use(restify.plugins.bodyParser());
                for (let router of routers) {
                    router.appyRoutes(this.application);
                }
                this.application.listen(environment_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap(routers = []) {
        return this.initializeDB().then(() => this.initRoutes(routers).then(() => this));
    }
}
exports.Server = Server;
