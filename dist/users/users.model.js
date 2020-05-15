"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const users = [
    { name: 'Peter Park', email: 'peter@marvel.com' },
    { name: 'Bruce Wayne', email: 'bruce@marvel.com' }
];
class Users {
    static findAll() {
        return Promise.resolve(users);
    }
}
exports.Users = Users;
