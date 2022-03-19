const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({ origin: '*' }));
//routes.use(cors({origin: 'http://localhost:3001'}));

const usuarioRout = require("./UsuarioRout");
routes.use("/api", usuarioRout);
module.exports = routes;