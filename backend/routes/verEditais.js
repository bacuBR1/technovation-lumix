const express = require("express");
const router = express.Router();
const Editais = require("../models/Editais.models");
router.use(express.json());

router.get("/", async (req, res) => {
    try{
        const editais = await Editais.findAll()
        res.status(200).json(editais);
    } catch (error) {
        res.status(500).json(error);
    };
});

module.exports = router;