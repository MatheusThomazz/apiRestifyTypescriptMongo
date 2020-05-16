import { Router } from '../common/router';
import * as restify from 'restify';
import { Users } from './users.model';


class UsersRouter extends Router {
    appyRoutes(application: restify.Server){
        //retorna todos os users
        application.get('/users', (req, resp, next) =>{
            Users.findAll().then(users =>{
                resp.json(users)
                return next()
            })

        })
        //retorna 1 user por id
        application.get('/users/:id',(req, resp, next) =>{
            Users.findById(req.params.id).then(user =>{
                if(user){
                    resp.json(user)
                    return next()
                }else{
                    resp.send(404)
                    return next()
                }
                
            })
        })
    }
}

export const usersRouter = new UsersRouter()
