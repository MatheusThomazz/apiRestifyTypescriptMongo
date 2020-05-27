export const environment = {
    server: { port: process.env.SERVER_PORT || 3000 }, 
    db:{url: process.env.BD_URL || 'mongodb://localhost/api-de-restaurantes'} 
}