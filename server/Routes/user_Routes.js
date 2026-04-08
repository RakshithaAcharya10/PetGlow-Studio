const express = require('express')
const { registeruser, Login, getuser, deleteuser } = require('../Controller/user_controller')

const route = express.Router();

route.post('/registeruser', registeruser)
route.post('/Login', Login)
route.get('/getuser', getuser)
route.delete('/deleteuser/:id', deleteuser)

module.exports = route