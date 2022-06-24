import React,{ useState } from "react";
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';

const RequisicaoForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [id]: value });
  };

  const handleInputChange1 = (event) => {
    const { id, value } = event.target;
    props.setSolicitantes({ ...props.solicitantes, [id]: value });
  };

  const handleInputChange2 = (event) => {
    const { id, value } = event.target;
    props.setTiposReq({ ...props.tiposReq, [id]: value });
  };
  const [statusReq, setStatusReq] = useState([]);
  const [tipoReq, setTipoReq] = useState([]);
  const [solicitante, setSolicitante] = useState([]);
  const status = [
    {label: 'Aberto'},
    {label: 'Em Andamento'},
    {label: 'Finalizado'}
  ];

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
      props.requisicao.status = statusReq.label;
      props.requisicao.Solicitante = solicitante;
      props.requisicao.TipoRequisicao = tipoReq;
      props.salvar(); 
    }

    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Requisicao</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">titulo</label>
              <InputText id="titulo" defaultValue={props.requisicao.titulo}
                {...register("titulo", { 
                  required: {value:true, message:"O titulo é obrigatório."}, 
                  minLength: {value:2, message:"O titulo deve ter pelo menos 2 caracteres."}, 
                  maxLength: {value:50, message:"O titulo deve ter no máximo 50 caracteres."} 
                })}
                onChange={handleInputChange} />
              {errors.titulo && <span style={{color:'red'}}>{errors.titulo.message}</span>}  
            </div>
            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">descricao</label>
              <InputText id="descricao" defaultValue={props.requisicao.descricao}
                {...register("descricao", { 
                  required: {value:true, message:"O descricao é obrigatório."}, 
                  minLength: {value:2, message:"O descricao deve ter pelo menos 2 caracteres."}, 
                  maxLength: {value:50, message:"O descricao deve ter no máximo 50 caracteres."} 
                })}
                onChange={handleInputChange} />
              {errors.descricao && <span style={{color:'red'}}>{errors.descricao.message}</span>}  
            </div>
            <div className="field col-12 md:col-4">
              <label htmlFor="dataHoraCriada">Data Do problema</label>
              <Calendar id="dataHoraCriada" defaultValue={props.requisicao.dataHoraCriada} onChange={handleInputChange}></Calendar>
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="status">status</label>
              <Dropdown value={statusReq} options={status} onChange={(e) => setStatusReq(e.value)} placeholder="Selecione o status"/>
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="prazoAtendimento">Prazo de atendimento</label>
              <Calendar id="prazoAtendimento" defaultValue={props.requisicao.prazoAtendimento} onChange={handleInputChange}></Calendar>
            </div>
            <div className="field col-12 md:col-4">
              <label htmlFor="Solicitante">Solicitante</label>
                <Dropdown optionLabel="nome" value={solicitante} options={props.solicitantes} onChange={(e) => setSolicitante(e.value)} placeholder="Selecione o Solicitante"/>
            </div>
            <div className="field col-12 md:col-4">
              <label htmlFor="tipoReq">Tipo de Requisicao</label>
                <Dropdown optionLabel="descricao" value={tipoReq} options={props.tiposReq} onChange={(e) => setTipoReq(e.value)} placeholder="Selecione o Tipo de Requisicao"/>
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
export default RequisicaoForm;
