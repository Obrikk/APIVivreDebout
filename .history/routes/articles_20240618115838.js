const express = require('express')
const Article = require('../models/article.js')
let router= express.Router()


router.get('', (req,res) =>{
    Article.findAll()
        .then( articles =>{
            if(articles.length === 0){
                return res.json({message: "Il n'y a aucun article"})
            }
            res.json({data: articles})
        })
        .catch(err => res.status(500).json({message: 'Database error', err}))
})


router.put('', (req,res) =>{
    const {nom, type, date, description} = req.body

    if(!nom || !type || !date || !description){
        return res.json({message: "Il manque des informations sur l'article !"})
    }
    

    res.json({message: nom, type, date, description})
})

module.exports = router