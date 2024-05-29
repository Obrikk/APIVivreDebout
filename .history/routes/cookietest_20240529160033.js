const express = require('express')
const cookieParser = requiree('cookieparser')


const router = express()

router.use(cookieParser())

router.use((req,res,next)=>{
    console.log('Salut je suis le middleware jsuis vrm un grod fils de pute')
})

router.get('', (req, res)=> {
    res.cookie('root', 'root')
    return res.json({message: 'cookie root envoyé'})
})


module.exports = router