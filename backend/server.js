require('dotenv').config();
const express = require('express');
const server = express();
const db = require('./config/db');
server.use(express.json());


//editais//
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


//cadastros//
const cadalunos = require("./routes/cadaluno.js");
const cadprof = require("./routes/cadprof.js");
const deletaluno = require("./routes/deletaluno.js");
const deletprof = require("./routes/deletprof.js");
const atualizaalun = require("./routes/atualizaalun.js");
const atualizaprof = require("./routes/atualizaprof.js");

server.use("/cadalunos", cadalunos);
server.use("/cadprof",cadprof);
server.use("/deletaluno", deletaluno);
server.use("/deletprof", deletprof);
server.use("atualizaalun", atualizaalun);
server.use("atualizaprof", atualizaprof);

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