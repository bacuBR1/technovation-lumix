
//criando servidro//
const express = require("express");
//sincronizando bd//

sequelize.sync()


//rota//
const router = express.router();
const usuario = require("../models/cadprof.models");
router.use(express.json());

router.post ("/cadprof", async function(req, res){
    try {
        const { nome, id, matricula, email, senha } = req.body;
        const novouser = await cadprof.create ({
            nome: req.body.nome,
            id: req.body.id,
            matricula: req.body.matricula,
            email: req.body.email,
            senha: req.body.senha
        });
        res.json({
            message: "usuario salvo com sucesso",
            user: novouser
        });
    } catch (error) {
        res.status(500).json({error: "Erro ao salvar usuário"});
    }
});

module.exports = router;
