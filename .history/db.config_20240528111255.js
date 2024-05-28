// Import des modules nécessaires
const { Sequelize } = require('sequelize')

// Connexion à la bdd
let sequelize = new Sequelize(
    process.envDB_NAME, process.envDB_USER, process.envDB_PASS, {
        host: process.envDB_HOST
        port: process.envDB_PORT,
        dialect: 'mysql',
        logging: false
    }
)