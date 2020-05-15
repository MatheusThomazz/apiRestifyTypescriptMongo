import * as restify from 'restify'
import {environment} from '../common/environment'
import { Router } from '../common/router';


export class Server{

    application: restify.Server

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve, reject) =>{
            try {
                this.application = restify.createServer({
                    name:'api-de-restaurantes',
                    version: '1.0.0'
                })

                for (let router of routers){
                    router.appyRoutes(this.application)
                }

                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })

                this.application.use(restify.plugins.queryParser())

                
                
            } catch (error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server>{
        return this.initRoutes(routers).then(() => this)
    }
}