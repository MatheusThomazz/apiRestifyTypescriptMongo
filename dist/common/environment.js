"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    server: { port: process.env.SERVER_PORT || 3000 },
    db: { url: process.env.BD_URL || 'mongodb://localhost/api-de-restaurantes' }
};
