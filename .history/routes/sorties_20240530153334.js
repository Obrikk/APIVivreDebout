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

    if(!nom || !type || !date || !lieu || !horaires || !coutBrut || !priseCharge || !coutTotal){
        res.status(404).json({message: 'Missing data'})
    }
    const newSortie ={
        nom:nom,
        type:type,
        date:date,
        lieu:lieu,
        horaires:horaires,
        coutBrut:coutBrut,
        priseCharge:priseCharge,
        coutTotal:coutTotal
    }
    Sortie.create(newSortie)
        .then(sortie=> res.json({message: 'Sortie bien ajoutée', data:sortie}))
        .catch(err => res.status(500).json({message:'Erreur base de données',err}))
})



router.delete('/:id', (req,res)=>{
    const sortieId = req.params.id
    if(!sortieId){
        return res.status(400).json({mssage: 'Missing parameter'})
    }
    User.destroy({where:{id:sortieId}, force:true})
        .then(()=> res.status(204).json({}))
        .catch(err)
})

module.exports = router