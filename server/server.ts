import * as restify from 'restify'
import {environment} from '../common/environment'
import { Router } from '../common/router';
import * as mongoose from 'mongoose'


export class Server{

    application: restify.Server

    initializeDB(): mongoose.MongooseThenable{
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.url,{
            useMongoClient:true
        })
        
    }

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve, reject) =>{
            try {
                this.application = restify.createServer({
                    name:'api-de-restaurantes',
                    version: '1.0.0'
                })

                this.application.use(restify.plugins.queryParser())
                this.application.use(restify.plugins.bodyParser())

                for (let router of routers){
                    router.appyRoutes(this.application)
                }

                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })

                

                
                
            } catch (error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server>{
        return this.initializeDB().then(() =>
            this.initRoutes(routers).then(() => this))
    }
}