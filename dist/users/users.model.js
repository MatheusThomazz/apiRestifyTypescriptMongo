"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const users = [
    { id: '1', name: 'Peter Park', email: 'peter@marvel.com' },
    { id: '2', name: 'Bruce Wayne', email: 'bruce@marvel.com' }
];
class Users {
    static findAll() {
        return Promise.resolve(users);
    }
    static findById(id) {
        return new Promise(resolve => {
            const filtered = users.filter(function tocompare(user) { return user.id === id; }); //users.filter(user => user.id ===id)
            let user = undefined;
            if (filtered.length > 0) {
                user = filtered[0];
            }
            resolve(user);
        });
    }
}
exports.Users = Users;
