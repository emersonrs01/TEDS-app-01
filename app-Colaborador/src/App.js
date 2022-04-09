import logo from './logo.svg';
import './App.css';
import ColaboradorList from './ColaboradorList.js';
import ColaboradorForm from './ColaboradorForm.js';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import axios from 'axios';
function App() {
  let colaboradoresList = 
  [
    { id: 1, nome: 'Fulano', email: 'email1@teste', senha: '54 6565 5454' },
    { id: 2, nome: 'Beltrano', email: 'email2@teste', senha: '54 6565 5454' },
  ]
  const onClickAtualizar = () => {
    colaboradoresList = [
      { id: 1, nome: 'fulano alterado', email: 'fulano@teste', senha: '54 6565 5454' },
      { id: 2, nome: 'beltrano', email: 'beltrano@teste', senha: '54 6565 5454' },
      { id: 3, nome: 'ciclano', email: 'ciclano@teste', senha: '54 6565 5454' }
    ];
    setColaboradores(colaboradoresList);
  }
  const initialState = { id: null, nome: '', email: '', senha: '' }
  const [colaborador, setColaborador] = useState(initialState)
  const [editando, setEditando] = useState(false)
  const inserir = () => {
    setColaborador(initialState);
    setEditando(true);
  }
  const salvar = () => {
    axios.post('http://localhost:3001/api/colaborador', {
        nome: colaborador.nome,
        email: colaborador.email,
        senha: colaborador.senha
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    })
    console.log('Salvar ...');
    setEditando(false);     
  }
  const cancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }

  const editar = (id) => {
    setColaborador(colaboradores.filter((colaborador) => colaborador.id == id)[0]);
    setEditando(true);
  }
  const excluir = (id) => {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
  }
  const [colaboradores, setColaboradores] = useState(colaboradoresList)

  if(!editando){
  return (
    <div className="App">
      <ColaboradorList colaboradores={colaboradores} onClickAtualizar ={onClickAtualizar }
      inserir={inserir} editar={editar} excluir={excluir} />
    </div>
  )
  }else{
    return (
      <div className="App">
        <ColaboradorForm colaborador={colaborador} setColaborador={setColaborador} salvar={salvar} cancelar={cancelar}  />
      </div>
    )
  }
}

export default App;