const express = require('express')


const router = express.Router()

router.post('', (req,res)=>{
    const {email, nomPrenom, tel, msg } = req.body
    
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'epicfail27370@gmail.com',
            pass: '#Lechat2004'
        }
    })
})

    const mailOptions = {
        from: `{email}`,
        to: 'epicfail27370@gmail.com',
        subject: nomPrenom,
        text: msg
    }


    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log("Il y a eu une erreur lors de l'envoi du mail", error)
            res.status(500).send('Erreur lors de l\'envoi de l\'email')
        } else{
            console.log('Email envoyé', )
        }
    })









module.exports = router