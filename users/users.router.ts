import { Router } from '../common/router';
import * as restify from 'restify';
import { Users } from './users.model';


class UsersRouter extends Router {
    appyRoutes(application: restify.Server){
        application.get('/users', (req, resp, next) =>{
            Users.findAll().then(users =>{
                resp.json(users)
                return next()
            })

        })
    }
}

export const usersRouter = new UsersRouter()
