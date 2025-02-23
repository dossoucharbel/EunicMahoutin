const http = require('http');
const app = require('./app');
const index = http.createServer(app)

index.listen(8000, ()=> {
    console.log("Server run in port 8080")
})