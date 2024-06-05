const express = require('express')


const router = express.Router()

router.post('', (req,res)=>{
    const {email, nomPrenom, tel, msg } = req.body
    
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'epicafail2737'
        }
    })
})











module.exports = router