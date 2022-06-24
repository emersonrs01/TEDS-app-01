import React, { useState, useEffect, useRef } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const RequisicaoList = (props) => {

  const OperacoesTemplate = (rowData) => {
    return (
      <>
        <button
          onClick={() => props.editar(rowData._id)}
          className="btn btn-warning btn-sm"
        >
          Editar
        </button>
        <button
          onClick={() => props.excluir(rowData._id)}
          className="btn btn-danger btn-sm"
        >
          Excluir
        </button>
      </>
    )
  }

  return (
    <div className="App">
      <h4>Listagem de requisicoes</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>

      <DataTable value={props.requisicoes} paginator responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5, 20, 50]} 
        selectionMode="single" selection={props.requisicao} 
        onSelectionChange={e => props.setRequisicao(e.value)} dataKey="_id"
        >
        {/* <Column field="_id" header="Id" sortable ></Column> */}
        <Column field="titulo" header="titulo" sortable filter ></Column>
        <Column field="descricao" header="descricao" sortable filter></Column>
        <Column field="dataHoraCriada" header="data de criacao" sortable filter></Column>
        <Column field="status" header="status" sortable filter></Column>
        <Column field="prazoAtendimento" header="prazo Atendimento" sortable filter></Column>
        <Column field="Solicitante.nome" header="Solicitante" sortable filter></Column>
        <Column field="TipoRequisicao.descricao" header="Tipo de Requisicao" sortable filter></Column>
        <Column body={OperacoesTemplate} header="Operações">
        </Column>
      </DataTable>
    </div>
  );
};
export default RequisicaoList;