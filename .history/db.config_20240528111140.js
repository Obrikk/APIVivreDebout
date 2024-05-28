// Import des modules nécessaires
const { Sequelize } = require('sequelize')

// Connexion à la bdd
let sequelize = new Sequelize(
    DB_NAME,
)