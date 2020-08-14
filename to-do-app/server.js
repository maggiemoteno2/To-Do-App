const express = require('express')
const server = express()
const bodyParser = require('body-parser');
var cors = require('cors')
// const { RegistryModel} = require('./models/registryModel')
const { userSignUp } = require('./routes/signUp')
const { MongoServer} = require('./config/dbConnection')

const port = 3001

server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

// RegistryModel(server)
userSignUp (server)
MongoServer(server)

server.listen(port, () => {
  console.log(`server listening at ${port}`)
})