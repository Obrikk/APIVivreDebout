const express = require('express')



const router = express()


router.get('', (req, res)=> {
    res.cookie('root', 'root')
    return res.json({message: ''})
})