const express = require('express')
const Article = require('../models/article.js')
let router= express.Router()


router.get('', (req,res) =>{
    Article.findAll()
        .then( articles =>{
            if (articles.length === 0) {
                return res.status(404).json({ message: "Il n'y a aucun article" });
              }
              return res.status(200).json({ data: articles });
        })
        .catch(err => res.status(500).json({message: 'Database error', err}))
})


router.put('', (req,res) =>{
    const {nom, type, date, description} = req.body

    Article.findOne({where :{nom:nom}, raw:true})
    .then(article=>{
        if(article !== null){
            return res.status(409).json({message: "L"}))
        }
    })

    if(!nom || !type || !date || !description){
        return res.json({message: "Il manque des informations sur l'article !"})
    }

    const newArticle ={
        nom: nom,
        type: type,
        date: date,
        description: description
    }

    Article.create(newArticle)
    .then(article=> res.json({message: 'Sortie bien ajoutée', data:article}))
    .catch(error=> res.json({message: "Erreur lors de l'ajout de la sortie", error}))

        


})

module.exports = router