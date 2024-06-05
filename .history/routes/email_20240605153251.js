const express = require('express')


const router = express.Router()

router.post('', (req,res)=>{
    const {email, nomPrenom, tel, msg } = req.body
    
    const transporter = nodemailer.createTransport({
        
    })
})











module.exports = router