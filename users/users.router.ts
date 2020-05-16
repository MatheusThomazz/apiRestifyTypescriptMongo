import { Router } from '../common/router';
import * as restify from 'restify';
import { User } from './users.model';


class UsersRouter extends Router {
    appyRoutes(application: restify.Server){
        //retorna todos os users
        application.get('/users', (req, resp, next) =>{
            User.find().then(users =>{
                resp.json(users)
                return next()
            })

        })
       // retorna 1 user por id
        application.get('/users/:id',(req, resp, next) =>{
            User.findById(req.params.id).then(user =>{
                console.log(user)
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
