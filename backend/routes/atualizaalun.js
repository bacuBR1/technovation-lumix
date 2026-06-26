const express = require("express");
const router = express.Router();
const cadaluno = require("../models/cad.models.js");
router.use(express.json());

router.put ("/", async function(req, res){
    try{
        const cadaluno = await cadaluno.findByPk(req.body.id);

        await cadaluno.updade ({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        });

        res.status(200).json(cadaluno);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;