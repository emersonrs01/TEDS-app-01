import React, { useState,useEffect, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import ColaboradorSrv from "../../ColaboradorSrv";

const AndamentoForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setAndamento({ ...props.andamento, [id]: value })
  };

  const handleInputChange1 = (event) => {
    const { id, value } = event.target;
    props.setColaboradores({ ...props.colaboradores, [id]: value });
  };

  const handleInputChange2 = (event) => {
    const { id, value } = event.target;
    props.setAtividades({ ...props.atividades, [id]: value });
  };
  
  const [colaborador, setColaborador] = useState([]);
  const [atividade, setAtividade] = useState([]);

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    props.andamento.Colaborador = colaborador._id;
    props.andamento.Atividade = atividade._id;
    props.salvar(); 
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Andamentos</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="titulo">titulo</label>
              <InputText id="titulo" defaultValue={props.andamento.titulo}
                {...register("titulo", { 
                  required: {value:true, message:"O titulo é obrigatório."}, 
                  minLength: {value:2, message:"O titulo deve ter pelo menos 2 caracteres."}, 
                  maxLength: {value:50, message:"O titulo deve ter no máximo 50 caracteres."} 
                })}
                onChange={handleInputChange} />
              {errors.titulo && <span style={{color:'red'}}>{errors.titulo.message}</span>}  
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="dataHora">Data</label>
              <Calendar id="dataHora" defaultValue={props.andamento.dataHora} onChange={handleInputChange}></Calendar>
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">descricao</label>
              <InputText id="descricao" defaultValue={props.andamento.descricao}
                {...register("descricao", { 
                  required: {value:true, message:"O descricao é obrigatório."}, 
                  minLength: {value:2, message:"O descricao deve ter pelo menos 2 caracteres."}, 
                  maxLength: {value:50, message:"O descricao deve ter no máximo 50 caracteres."} 
                })}
                onChange={handleInputChange} />
              {errors.descricao && <span style={{color:'red'}}>{errors.descricao.message}</span>}  
            </div>
            <div className="field col-12 md:col-4">
              <label htmlFor="Colaborador">Colaborador</label>
                <Dropdown optionLabel="nome" value={colaborador} options={props.colaboradores} onChange={(e) => setColaborador(e.value)} placeholder="Selecione o colaborador"/>
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="Atividade">Atividade</label>
                <Dropdown optionLabel="titulo" value={atividade} options={props.atividades} onChange={(e) => setAtividade(e.value)} placeholder="Selecione a atividade"/>
            </div>

          </div>
        </div>
      </div>

      <div>
        <Button label="Salvar" icon="pi pi-save" type="submit"  
                className="p-button-secondary p-button-text" />
        <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.cancelar} 
                className="p-button-secondary p-button-text" />
      </div>

    </form>
  );
};
export default AndamentoForm;
