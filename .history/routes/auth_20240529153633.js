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
                res.status(401).json({ message: 'This account does not exists'})
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

                    return(
                        res.cookie('CookieAuth', 1,{ httpOnly: true})
                        res
                    )
                })
                .catch(err => res.status(500).json({message: 'Login process failed', error:err}))
        })
        .catch(err => res.status(500).json({message: 'Database error'}))
})


module.exports = router