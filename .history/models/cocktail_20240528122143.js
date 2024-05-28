// Import des modules
const { DataTypes } = require('sequelize')
const DB = require('../db.config')

// Définition du modele User
const Cocktail = DB.define('Cocktail', {
    id:{
        type: DataTypes.INTEGER(10),
        primarykey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER(10),
        primarykey: true,
        autoIncrement: true
    },
    nom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    description:{
        type:DataTypes.TEXT,
        defaultValue: '',
        allowNull: false
    },
    recette:{
        type:DataTypes.TEXT,
        allowNull: false,
        defaultValue:''
    },
   
}, {paranoid: true}) //Ici pour faire du soft delete