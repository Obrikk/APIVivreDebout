// Imoprt des omdules nécessaires
const express = require('express') 
const Sortie = require('../models/sortie')

let router = express.Router()


router.get('', (req,res)=>{
    Sortie.findAll()
        .then( sorties => {
            if(sorties.length === 0){
                return res.json({message: "il n'y a pas de sorties de prévues"})
            }
            res.json({data: sorties})
        })
        .catch(err => res.status(500).json({message: 'Database error', err}))
})


router.put('', (req,res)=>{
    const { nom, type, date, lieu, horaires, coutBrut, priseCharge, coutTotal} = req.body

    if(!nom || !type || !date )
})


module.exports = router