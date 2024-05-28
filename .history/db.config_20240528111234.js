// Import des modules nécessaires
const { Sequelize } = require('sequelize')

// Connexion à la bdd
let sequelize = new Sequelize(
    procDB_NAME, DB_USER, DB_PASS, {
        host: DB_HOST
        port: DB_PORT,
        dialect: 'mysql',
        logging: false
    }
)