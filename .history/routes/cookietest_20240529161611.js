const express = require('express')
const cookieParser = require('cookie-parser')


const router = express()

router.use(cookieParser())



router.use('/send-good-job-cookie',(req,res,next)=>{
    if(req.cookies.root==='root'){
        next()
    } else {
        res.status(401).json({message: `Vous devez d'aabord récup le cookie root`})
    }
})

router.get('', (req, res)=> {
    res.cookie('root', 'root')
    return res.json({message: 'cookie root envoyé'})
})

router.post('send')

module.exports = router