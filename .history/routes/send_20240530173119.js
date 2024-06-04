const express = require('express')
const nodemailer = require('nodemailer')

let router = express.Router()



router.post('', (req,res) =>{
    const { email, nomPrenom, tel, objet, msg} = req.body
    res.json({message: email,nomPrenom,tel,msg})    
})



