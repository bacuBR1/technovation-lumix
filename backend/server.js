require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
const db = require('./config/db');
server.use(express.json());
server.use(cors());

const cadastrarEditais = require("./routes/cadastroEditais.js");
const deletarEditais = require("./routes/deletarEditais.js");
const atualizarEditais = require("./routes/atualizarEditais.js");
const verEditais = require("./routes/verEditais.js");
const verEsitalEspecifico = require('./routes/verEditalEspecifico.js');


server.use('/cadastrarEditais', cadastrarEditais);
server.use('/deletarEditais', deletarEditais);
server.use('/atualizarEditais', atualizarEditais);
server.use('/verEditais', verEditais);
server.use('/verEditalEspecifico', verEsitalEspecifico);

async function testDBConnection() {
    try {
        await db.authenticate();
        await db.sync();
        server.listen(process.env.PORT, () => {
            console.log(`Server rodando na porta ${process.env.PORT}`
        );});   
    } catch (error) {
        console.error('erro ao conectar:', error);
    }
} testDBConnection();