const express = require('express')
const nodemailer = require('nodemailer')

let router = express.Router()



router.post('', (req,res) =>{
    const { email, nomPrenom, tel, msg} = req.body
    res.json
})