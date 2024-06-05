const express = require('express')

const nodemailer= require('nodemailer')
const router = express.Router()

router.get('', (req,res)=>{
    res.send('endpoint email !')
})



router.post('', (req,res)=>{
    const {email, nomPrenom, tel, msg } = req.body
    
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'ht.audric@gmail.com',
            pass: 'Lechat2004'
        }
    })


    const mailOptions = {
        from: email,
        to: 'ht.audric@gmail.com',
        subject: nomPrenom,
        text: msg
    }
    
    
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log("Il y a eu une erreur lors de l'envoi du mail", error)
            res.status(500).send('Erreur lors de l\'envoi de l\'email')
        } else{
            console.log('Email envoyé', info.response)
            res.status(200).send('Email envoyé avec succès')
        }
    })


})










module.exports = router