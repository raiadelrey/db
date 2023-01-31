const sequelize = require('sequelize');
const sequelize = require('./lojaDB.js');
import sequelize from './lojaDB.js';

const loja = lojaDB.define('loja',{

    idloja:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true


    },
    nome_loja:{
        type: sequelize.STRING,
        allowNull: true
    },
    cidade_loja: {
        type: sequelize.STRING,
        allowNull: false
    },
    telefone_loja: {
        type: sequelize.STRING,
        allowNull: false
    }

})
module.exports = loja
