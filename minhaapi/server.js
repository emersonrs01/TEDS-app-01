console.log("Subindo API...")

const express = require('express');

const app = express();

app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const uri = "mongodb://admin:admin@localhost:27018/teste?authSource=teste";
MongoClient.connect(uri, (err, client) => {
    if (err) {
        return console.log(err);
    }
    db = client.db('teste');
    app.listen(3000, function () {
        console.log("API rodando na porta 3000");
        console.log("testar por http://localhost:3000");
    })
})

app.get('/', (req, res) => {

    res.send('Atendida a requisicao GET')

})

//const animais = require('./animais');
//animais(app);


const colaborador = require('./colaborador');
colaborador(app);


