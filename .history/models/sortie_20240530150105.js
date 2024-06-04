const {DataTypes} = require('sequelize')
const sequelize = require('../db.config')

const Sortie =sequelize.define('Sortie',{
    id:{
        type:DataTypes.INTEGER(10),
        primaryKey :true,
        autoIncrement: true
    },
    nom:{
        type:DataTypes.STRING(100)
    }
})