
const express = require('express')
const router = express.Router()
const fs = require('fs')


const uploadDirectory = path.join(__dirname, 'uploads');

router.get('', (req,res)=>{
    fs.readdir(uploadDirectory,(err,files)=>{
        if(err){
            console.error('Erreur lors de la lecture du dossier')
            return res.
        }
    })
})


// Upload de photos
router.post('', (req, res)=>{
    if(!req.file){
        return res.status(400).send('No file uploaded')
    }
})


modules.exports = router