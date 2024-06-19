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


router.put('', (req, res) => {
    const { nom, type, date, description, lien } = req.body;
  
    if (!nom || !type || !date || !description || lien) {
      return res.status(400).json({ message: "Il manque des informations sur l'article !" });
    }
  
    Article.findOne({ where: { nom: nom }, raw: true })
      .then(article => {
        if (article !== null) {
          return res.status(409).json({ message: "Un article du même nom existe déjà !" });
        }
  
        const newArticle = {
          nom: nom,
          type: type,
          date: date,
          description: description,
          lien: lien
        };
  
        return Article.create(newArticle)
          .then(article => res.status(201).json({ message: 'Sortie bien ajoutée', data: article }))
          .catch(error => res.status(500).json({ message: "Erreur lors de l'ajout de la sortie", error }));
      })
      .catch(error => res.status(500).json({ message: 'Erreur lors de la vérification de l\'article', error }));
  });
  




module.exports = router