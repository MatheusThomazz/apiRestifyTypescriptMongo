const users = [
    {id: '1', name:'Peter Park', email:'peter@marvel.com'},
    {id: '2',name:'Bruce Wayne', email:'bruce@marvel.com'}
]

export class Users{
    static findAll(): Promise<any[]>{
        return Promise.resolve(users)
    }

    static findById(id: string){
        return new Promise(resolve => {
            const filtered = users.filter(function tocompare(user){return user.id === id}) //users.filter(user => user.id ===id)
            let user = undefined
            if(filtered.length > 0){
                user = filtered[0]
            }
            resolve(user)
        })
    }
}