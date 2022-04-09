import logo from './logo.svg';
import './App.css';
import UsuarioList from './UsuarioList.js';
import UsuarioForm from './UsuarioForm.js';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
function App() {
  let usuariosList = [
    { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454', idade: 30 },
    { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454', idade: 30 },
  ]
  const onClickAtualizar = () => {
    usuariosList = [
      { id: 1, nome: 'fulano alterado', email: 'fulano@teste', celular: '54 6565 5454', idade: 30 },
      { id: 2, nome: 'beltrano', email: 'beltrano@teste', celular: '54 6565 5454', idade: 20 },
      { id: 3, nome: 'ciclano', email: 'ciclano@teste', celular: '54 6565 5454', idade: 20 }
    ];
    setUsuarios(usuariosList);
  }
  const initialState = { id: null, nome: '', email: '', celular: '' }
  const [usuario, setUsuario] = useState(initialState)
  const [editando, setEditando] = useState(false)
  const inserir = () => {
    setUsuario(initialState);
    setEditando(true);
  }
  const salvar = () => {
    console.log('Salvar ...');
    if (usuario.id == null){ // inclussão
      usuario.id = usuarios.length + 1
      setUsuarios([...usuarios, usuario])
    } else { // alteração
      setUsuarios(usuarios.map((find) => (find.id === usuario.id ? usuario : find)))
    }
    setEditando(false);     
  }
  const cancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }

  const editar = (id) => {
    setUsuario(usuarios.filter((usuario) => usuario.id == id)[0]);
    setEditando(true);
  }
  const excluir = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  }
  const [usuarios, setUsuarios] = useState(usuariosList)

  if(!editando){
  return (
    <div className="App">
      <UsuarioList usuarios={usuarios} onClickAtualizar ={onClickAtualizar }
      inserir={inserir} editar={editar} excluir={excluir} />
    </div>
  )
  }else{
    return (
      <div className="App">
        <UsuarioForm usuario={usuario} setUsuario={setUsuario} salvar={salvar} cancelar={cancelar}  />
      </div>
    )
  }
}

export default App;