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
            if((user === null)){
                return res.status(404).json({message: 'User does not exist'})
            }
            return res.json({data: user})
        })
        .catch(err => res.status(500).json({message: 'Database error', error: err}))
})

router.put('', (req, res) => {
    const {nom, prenom, pseudo, email, password} = req.body  // nom = req.body.nom, ...

    if(!nom || ! prenom || !pseudo || !email || !password){
        res.status(400).json({message: 'Missing data'})
    }
    
    User.findOne({where: { email:email }, raw: true})
        .then(user => {
            if( user!== null){
                return res.status(409).json({message: `The user ${nom} already exists ! `})
            }

            const newUser = {
                nom:nom,
                prenom:prenom,
                pseudo:pseudo,
                email:email,
                password:password,
            }
            User.create(newUser)
                .then(user => res.json({message: 'User Created', data:user}))
                .catch(err => res.status(500).json({message: 'Error database', error: err}))
                
        })
        .catch(err => res.status(500).json({message: 'Error database', error: err}))
    
})

router.patch('/:id')

router.delete('/:id')