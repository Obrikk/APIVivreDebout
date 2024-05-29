const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')


let router = express.Router()


//Routage de la ressourc auth
router.post('/login', (req,res)=> {
    const {email, password} = req.body

    if(!email || !password){
        res.status(400).json({message:'Bad email or password'})
    }

    User.findOne({where: {email:email}, raw:true})
        .then(user=>{
            if(user === null){
                return res.status(401).json({ message: 'This account does not exists'})
            }


            //l'user existe, on vient maintenant verifier le mot de passe
            bcrypt.compare(password, user.password)
                .then(test=> {
                    if(!test){
                        return res.status(401).json({ message: 'wrong password'})
                    }
                    // le password est bon donc on vint faire une reponse avec un token
                    //jwt.sign({payload},secret,durée)
                    const token = jwt.sign({    //le payload
                        id: user.id,
                        nom: user.nom,
                        prenom: user.prenom,    
                        email: user.email
                    },process.env.JWT_SECRET, {expiresIn: process.env.JWT_DURING})     //La signature

                    // return res.json({access_token: token})
                    return res.cookie('access_token', token, {
                        httpOnly: true, // Le cookie n'est pas accessible via JavaScript
                        secure: process.env.NODE_ENV === 'production', // Utilisé seulement en HTTPS en production
                        sameSite: 'Strict', // CSRF protection
                      });
                })
                .catch(err => res.status(500).json({message: 'Login process failed', error:err}))
        })
        .catch(err => res.status(500).json({message: 'Database error'}))
})


module.exports = router