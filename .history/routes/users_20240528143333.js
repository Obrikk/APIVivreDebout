// Imoprt des omdules nécessaires
const express = require('express') 
const User = require('../models/user')
const bcrypt =require('bcrypt')

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

            bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND))
            .then(hash => {
                const hashPassword = hash
                const newUser = {
                    nom:nom,
                    prenom:prenom,
                    pseudo:pseudo, 
                    email:email,
                    password:hashPassword,
                }

                    User.create(newUser)
                        .then(user => res.json({message: 'User Created', data:user}))
                        .catch(err => res.status(500).json({message: 'Error database', error: err}))
                })
                .catch(err => res.status(500).json({message: 'Hash process error', error: err}))

                
        })
        .catch(err => res.status(500).json({message: 'Error database', error: err}))
    
})

router.patch('/:id', (req,res) => {
    let userId = parseInt(req.params.id)
    
    //Verificatoion is le champ id est present et cohérent
    if(!userId){
        return res.status(400).json(({ message: 'Missing parameter'}))
    }
    User.findOne({where: {id:userId}, raw:true})
        .then(user => {
            if(user === null){
                res.status(404).json({message: 'This user does not exists'})
            }

            //mise a jour de l'utilisateur
            User.update(req.body, {where: {id:userId}})
                .then(user => res.json({message: `User ${userId} mis à jour`}))
                .catch(err => res.status(500).json({message: 'Error database'}))
        })
})

router.delete('/:id', (req,res) => {
    let userId = req.params.id
    if(!userId){ //Verif si le champ id est rempli
        return res.status(400).json({message: 'Missing parameter'})
    }

    //Suppression de l'utilisateur
    User.destroy({where:{id:userId}, force: true})
})