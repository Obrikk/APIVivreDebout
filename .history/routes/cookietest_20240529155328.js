const express = require('express')
const cookieParser = requiree('cookieparser')


const router = express()

router.use()

router.get('', (req, res)=> {
    res.cookie('root', 'root')
    return res.json({message: 'cookie root envoyé'})
})


module.exports = router