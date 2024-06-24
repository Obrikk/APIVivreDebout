
const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const uploadCommon = require('../middleware/multer-common');


const uploadDirectory = path.join(__dirname,'..', 'uploads');

router.get('', (req,res)=>{
    fs.readdir(uploadDirectory,(err,files)=>{
        if(err){
            console.error('Erreur lors de la lecture du dossier')
            return res.status(500).send('Erreur serveur')
        }

    const images = files.filter(file => {
        return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif');
      });
    const imageUrls = images.map(image=>`/uploads/${image}`)

    res.json(imageUrls)
    })



})


// Upload de photos
router.post('', (req, res)=>{
    if(!req.file){
        return res.status(400).send('No file uploaded')
    }
    res.json({ fileName: req.file.filename, filePath: `/uploads/${req.userId}/${req.file.filename}` });

})


module.exports = router