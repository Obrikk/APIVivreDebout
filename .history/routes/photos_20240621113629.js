
const express = require('express')
const router = express.Router()



router.post('', (req, res)=>{
    if(!req.file){
        return res.status(400).send('No file uploaded')
    }
})


modules.exports = router