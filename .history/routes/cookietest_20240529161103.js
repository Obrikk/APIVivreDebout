const express = require('express')
const cookieParser = require('cookie-parser')


const router = express()

router.use(cookieParser())



router.use((req,res,next)=>{
    if(req.coo)
    next()
})

router.get('', (req, res)=> {
    res.cookie('root', 'root')
    return res.json({message: 'cookie root envoyé'})
})


module.exports = router