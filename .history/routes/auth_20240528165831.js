const express = require('express')
const bcrypt = require('bcrypt')

const User = require('../models/user')


let router = express.Router()


//Routage de la ressourc auth
router.post('/login', (req,res)=> {
    const {email, password} = req.body

    if(!email || !password){
        res.status(400).json({message:'Bad request, not enough data'})
    }

    User.findOne({where: {email:email}, row:true})
        .then(user=>{
            if(user === null){
                res.status(401).json({ message: 'This account does not exists'})
            }


            //l'user existe, on vient maintenant verifier le mot de passe
            bcrypt.compare(password, user.password)
                .then(test=> {
                    if(!test){
                        return res.status(401).json({})
                    }
                })
                .catch(err => res.status(500).json({message: 'Login process failed', error:err}))
        })
        .catch(err => res.status(500).json({message: 'Database error'}))
})