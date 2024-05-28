const express = require('express')
const bcrypt = require('bcrypt')

const User = require('../models/user')


let router = express.Router()


//Routage de la ressourc auth
router.post('/login')