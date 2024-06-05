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











module.exports = router