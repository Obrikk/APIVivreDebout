const {DataTypes} = require('sequelize')
const sequelize = require('../db.config')

const Article =sequelize.define('Article',{
    id:{
        type:DataTypes.INTEGER(10),
        primaryKey :true,
        autoIncrement: true
    },
    nom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    auteur:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    date:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull: true
    },
    lien:{
        type:DataTypes.STRING(300),
        allowNull: false
    }
   
}, {paranoid: true})


module.exports = Article