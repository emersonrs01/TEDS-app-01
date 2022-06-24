const express = require('express');
const routes = express.Router();
const colaborador = require('../controller/ColaboradorCont');
const solicitante = require('../controller/SolicitanteCont');
const andamento = require('../controller/AndamentoCont');
const atividade = require('../controller/AtividadeCont');
const requisicao = require('../controller/RequisicaoCont');
const tiporequisicao = require('../controller/TipoRequisicaoCont');


routes.route('/Colaborador').get(colaborador.listar);
routes.route('/Colaborador').post(colaborador.incluir);
routes.route('/Colaborador').put(colaborador.alterar);
routes.route('/Colaborador/:id').delete(colaborador.excluir);
routes.route('/Colaborador/:id').get(colaborador.obterPeloId);
routes.route('/Colaborador/filtro/:filtro').get(colaborador.filtrar);
routes.route('/Colaborador/alterarSenha').put(colaborador.alterarSenha);

routes.route('/solicitante').get(solicitante.listar);
routes.route('/solicitante').post(solicitante.incluir);
routes.route('/solicitante').put(solicitante.alterar);
routes.route('/solicitante/:id').delete(solicitante.excluir);

routes.route('/andamento').get(andamento.listar);
routes.route('/andamento').post(andamento.incluir);
routes.route('/andamento').put(andamento.alterar);
routes.route('/andamento/:id').delete(andamento.excluir);

routes.route('/atividade').get(atividade.listar);
routes.route('/atividade').post(atividade.incluir);
routes.route('/atividade').put(atividade.alterar);
routes.route('/atividade/:id').delete(atividade.excluir);

routes.route('/requisicao').get(requisicao.listar);
routes.route('/requisicao').post(requisicao.incluir);
routes.route('/requisicao').put(requisicao.alterar);
routes.route('/requisicao/:id').delete(requisicao.excluir);

routes.route('/tiporequisicao').get(tiporequisicao.listar);
routes.route('/tiporequisicao').post(tiporequisicao.incluir);
routes.route('/tiporequisicao').put(tiporequisicao.alterar);
routes.route('/tiporequisicao/:id').delete(tiporequisicao.excluir);

module.exports = routes;

