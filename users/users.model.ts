const users = [
    {name:'Peter Park', email:'peter@marvel.com'},
    {name:'Bruce Wayne', email:'bruce@marvel.com'}
]

export class Users{
    static findAll(): Promise<any[]>{
        return Promise.resolve(users)
    }
}