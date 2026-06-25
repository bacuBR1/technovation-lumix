//Importa os tipos de dados do bd//
const { DataTypes } = require("sequelize");
//importa a conexão com o bd//
const db = require("../config/db.js");

const cadaluno = db.define(
    "cadaluno",
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        matricula: {
            type: DataTypes.STRING,
            allowNull: false,
            uniqueKey: true,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "cadaluno",
        timestamps: false
    }
);

module.exports = cadaluno;