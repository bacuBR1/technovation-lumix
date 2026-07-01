const { DataTypes } = require('sequelize');
const db = require("../config/db.js");

const Intermediaria = db.define(
    'intermediaria',
    {
        professores: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "professores",
                key: "id",
            },
        },
        alunos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "alunos",
                key: "id",
            },
        },
        editais: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Editais",
                key: "id",
            },
        },
    },
    {
        tableName: "intermediaria",
        timestamps: false,
    }
);

module.exports = Intermediaria;
