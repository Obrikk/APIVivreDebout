
const express = require('express')
const router = express.Router()


const uploadDirectory = path.join(__dirname, 'uploads');

router.get('', (req,res)=>{

})


// Upload de photos
router.post('', (req, res)=>{
    if(!req.file){
        return res.status(400).send('No file uploaded')
    }
})


modules.exports = router