import logo from './logo.svg';
import './App.css';
import AtividadeList from './AtividadeList.js';
import AtividadeForm from './AtividadeForm.js';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AtividadeSrv from './services/AtividadeSrv.js';
import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
function App() {
  const toastRef = useRef();
  const [atividades, setAtividades] = useState([]);
  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);
  const onClickAtualizar = async () => {
    AtividadeSrv.listar().then(resp => {
      setAtividades(resp.data);
      console.log(resp.data);
    }).catch(err => {
      console.log("erro: " + err.message);
    });
  };
  const initialState = { id: null, nome: '', data: '', status: '' }
  const [atividade, setAtividade] = useState(initialState)
  const [editando, setEditando] = useState(false)
  const inserir = () => {
    setAtividade(initialState);
    setEditando(true);
  }
const salvar = () => {
    if (atividade._id == null) { // inclussão
      AtividadeSrv.incluir(atividade).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    } else { // alteração
      AtividadeSrv.alterar(atividade).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    }

    //axios.post('http://localhost:3001/api/atividade', {
    //  nome: atividade.nome,
    //  data: atividade.data,
    //  status: atividade.status
    //})
    //  .then(function (response) {
    //    toastRef.current.show({
    //      severity: 'success',
    //      summary: "Usuários atualizados",
    //      life: 3000
    //    });
    //    console.log(response);
    //  })
    //  .catch(function (error) {
    //    console.error(error);
    //  })
    //console.log('Salvar ...');
    //setEditando(false);
  }
  const cancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }

  const editar = (id) => {
    setAtividade(atividades.filter((atividade) => atividade._id == id)[0]);
    setEditando(true);
    
  }
  const excluir = (_id) => {
    AtividadeSrv.excluir(_id).then(response => {
      onClickAtualizar();
      toastRef.current.show({
        severity: 'success',
        summary: "Excluído", life: 2000
      });
    })
      .catch(e => {
        toastRef.current.show({
          severity: 'error',
          summary: e.message, life: 4000
        });
      });
  }

  if (!editando) {
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <AtividadeList atividades={atividades} onClickAtualizar={onClickAtualizar}
          inserir={inserir} editar={editar} excluir={excluir} />
      </div>
    )
  } else {
    <Toast ref={toastRef} />
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <AtividadeForm atividade={atividade} setAtividade={setAtividade} salvar={salvar} cancelar={cancelar} />
      </div>
    )
  }
}

export default App;