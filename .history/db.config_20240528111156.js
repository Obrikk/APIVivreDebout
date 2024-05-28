// Import des modules nécessaires
const { Sequelize } = require('sequelize')

// Connexion à la bdd
let sequelize = new Sequelize(
    DB_NAME, DB_USER, DB_PASS, {
        host: DB_HOST
        
    }
)