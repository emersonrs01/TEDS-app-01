import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import AndamentoList from "./AndamentoList";
import AndamentoForm from "./AndamentoForm";
import AndamentoSrv from "../../AndamentoSrv";
import ColaboradorSrv from "../../ColaboradorSrv";
import AtividadeSrv from "../../AtividadeSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";



function AndamentoCon() {
  const [andamentos, setAndamentos] = useState([]);
  const initialState = { id: null, descricao: ""};
  const [andamento, setAndamento] = useState(initialState);
  const [editando, setEditando] = useState(false);
  const toastRef = useRef();
  const [colaboradores, setColaboradores] = useState([]);
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    onClickAtualizar();
    onClickAtualizar1();
    onClickAtualizar2();   // ao inicializar execula método para atualizar
  }, []);

  const onClickAtualizar1 = () => {
    ColaboradorSrv.listar().then((response) => {
        setColaboradores(response.data);
      })
      .catch((e) => {
        console.log("Erro: " + e.message);
      });
  };

  const onClickAtualizar2 = () => {
    AtividadeSrv.listar().then((response) => {
      setAtividades(response.data);
      })
      .catch((e) => {
        console.log("Erro: " + e.message);
      });
  };

  const onClickAtualizar = () => {
    AndamentoSrv.listar().then((response) => {
      setAndamentos(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Andamentos Atualizados!",
          life: 3000,
        });
      })
      .catch((e) => {
        console.log("Erro: " + e.message);
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };

  const inserir = () => {
    setAndamento(initialState);
    setEditando(true);
  };

  const salvar = () => {
    if (andamento._id == null) { // inclusão
      AndamentoSrv.incluir(andamento)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    } else { // alteração
      AndamentoSrv.alterar(andamento)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    }
  };

  const cancelar = () => {
    setEditando(false);
  };

  const editar = (id) => {
    setAndamento(
      andamentos.filter((andamento) => andamento._id == id)[0]
    );
    setEditando(true);
  };

  const excluir = (_id) => {
    confirmDialog({
      message: "Confirma a exclusão?",
      header: "Confirmação",
      icon: "pi pi-question",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      acceptClassName: "p-button-danger",
      accept: () => excluirConfirm(_id),
    });
  };

  const excluirConfirm = (_id) => {
    AndamentoSrv.excluir(_id)
      .then((response) => {
        onClickAtualizar();
        toastRef.current.show({
          severity: "success",
          summary: "Excluído",
          life: 2000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 4000,
        });
      });
  };


  if (!editando) {
    return (
      <div>
        <ConfirmDialog />
        <AndamentoList
          andamentos={andamentos}
          andamento={andamento}
          setAndamento={setAndamento}
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
        />
        <Toast ref={toastRef} />
      </div>
    );
  } else {
    return (
      <div>
        <AndamentoForm
          andamento={andamento}
          setAndamento={setAndamento}
          colaboradores={colaboradores}
          setColaboradores={setColaboradores}
          atividades={atividades}
          setAtividades={setAtividades}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }

}
export default AndamentoCon;
