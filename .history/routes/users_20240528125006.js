// Imoprt des omdules nécessaires
const express = require('express') 
const User = require('../models/user')

// Récupération du router d'express
let router = express.Router()

//Routage de la ressource User
router.get('', (req,res) => {
    User.findAll()
        .then( users => res.json({data: users}))
        .catch( err => res.status(500).json({message: 'Database error', error: err}))
})

router.get('/:id', (req,res) => {
    let userId = parseInt(req.params.id) //parseInt va transformer en entier si c un string, false si c string
    
    //verif si le champ est présent et cohérent
    if(!userId){
        return res.status(400).json({message: 'Missing Parameter'})
    }

    //Récupération de l'utilisateur
    User.findOne({ where: {id:userId}, raw: true})
        .then(user => {
            if()
        })
})

router.put('')

router.patch('/:id')

router.delete('/:id')