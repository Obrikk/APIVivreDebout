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


    transporter.sendMail(mailOptions, (error, ingo))









module.exports = router