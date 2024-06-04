// Imoprt des omdules nécessaires
const express = require('express') 
const Sortie = require('../models/sortie')

let router = express.Router()


router.get('', (req,res)=>{
    Sortie.findAll()
        .then( sorties => res.json(data: sorties))
        .catch(err => res.status(500).json({message: ''}))
})