console.log("API OK")

const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
    return console.log("API executando na porta " + port)
});

// usar o momgo
require("./server/banco/mongo");
// Usar as rotas
const routes = require('./server/routes/index');
app.use(routes);