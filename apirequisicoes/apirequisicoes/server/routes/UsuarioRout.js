const express = require('express');
const routes = express.Router();
const controle = require('../controller/ColaboradorCont');
routes.route('/Colaborador').get(controle.listar);
routes.route('/Colaborador').post(controle.incluir);
routes.route('/Colaborador').put(controle.alterar);
routes.route('/Colaborador/:id').delete(controle.excluir);
routes.route('/Colaborador/:id').get(controle.obterPeloId);
routes.route('/Colaborador/filtro/:filtro').get(controle.filtrar);

module.exports = routes;

