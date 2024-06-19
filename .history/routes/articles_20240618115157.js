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
})