
//criando servidro//
const express = require("express");


//sincronizando bd//



//rota//
const router = express.Router();
const cadaluno = require("../models/cad.models");
router.use(express.json())

router.post ("/cadaluno",async function(req, res){
    try {
        const { nome, id, matricula, email, senha } = req.body;
        const novouser = await cadaluno.create ({
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