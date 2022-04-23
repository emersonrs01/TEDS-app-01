const express = require('express');
const routes = express.Router();
const Atividade = require('../controller/AtividadeCont');


routes.route('/Atividade').get(Atividade.listar);
routes.route('/Atividade').post(Atividade.incluir);
routes.route('/Atividade').put(Atividade.alterar);
routes.route('/Atividade/:id').delete(Atividade.excluir);
routes.route('/Atividade/:id').get(Atividade.obterPeloId);
routes.route('/Atividade/filtro/:filtro').get(Atividade.filtrar);


module.exports = routes;

