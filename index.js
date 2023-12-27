//step 1
const jsonServer = require('json-server')

//step 2

const server = jsonServer.create()

//step 3
const router = jsonServer.router('db.json')

//step 4

const middilware = jsonServer.defaults()

//step 5
 const port = process.env.port || 3001

//step 6

server.use(middilware)
server.use(router)

//step 7
server.listen(port, () =>{
    console.log('JSON server listening on port 3001');
})
