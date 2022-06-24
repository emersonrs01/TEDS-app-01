import React,{ useState } from "react";
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
const AtividadeForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setAtividade({ ...props.atividade, [id]: value });
  };
  const handleInputChange1 = (event) => {
    const { id, value } = event.target;
    props.setRequisicoes({ ...props.requisicoes, [id]: value });
  };
  const [requisicao, setRequisicao] = useState([]);
  const [statusReq, setStatusReq] = useState([]);
  const status = [
    {label: 'Aberto'},
    {label: 'Em Andamento'},
    {label: 'Finalizado'}
  ];

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
      props.atividade.status = statusReq.label;
      props.atividade.Requisicao = requisicao._id;
      props.salvar(); 
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de atividade</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">titulo</label>
              <InputText id="titulo" defaultValue={props.atividade.titulo}
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
              <InputText id="descricao" defaultValue={props.atividade.descricao}
                {...register("descricao", { 
                  required: {value:true, message:"O descricao é obrigatório."}, 
                  minLength: {value:2, message:"O descricao deve ter pelo menos 2 caracteres."}, 
                  maxLength: {value:50, message:"O descricao deve ter no máximo 50 caracteres."} 
                })}
                onChange={handleInputChange} />
              {errors.descricao && <span style={{color:'red'}}>{errors.descricao.message}</span>}  
            </div>
            <div className="field col-12 md:col-4">
              <label htmlFor="status">status</label>
              <Dropdown value={statusReq} options={status} onChange={(e) => setStatusReq(e.value)} placeholder="Selecione o status"/>
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="prazo">Prazo de atendimento</label>
              <Calendar id="prazo" defaultValue={props.atividade.prazo} onChange={handleInputChange}></Calendar>
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="agendaInicio">Data Do problema</label>
              <Calendar id="agendaInicio" defaultValue={props.atividade.agendaInicio} onChange={handleInputChange}></Calendar>
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="Requisicao">Requisicao</label>
                <Dropdown optionLabel="titulo" value={requisicao} options={props.requisicoes} onChange={(e) => setRequisicao(e.value)} placeholder="Selecione a requisicao"/>
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
    //<form>
    //  <div class="form-group">
    //    <label>titulo</label>
    //    <input
    //      class="form-control"
    //      type="text"
    //      name="titulo"
    //      value={props.atividade.descricao}
    //      onChange={handleInputChange}
    //    />
    //  </div>
    //  <div class="form-group">
    //    <label>descricao</label>
    //    <input
    //      class="form-control"
    //      type="text"
    //      name="descricao"
    //      value={props.atividade.descricao}
    //      onChange={handleInputChange}
    //    />
    //  </div>
    //  <div class="form-group">
    //    <label>status</label>
    //    <input
    //      class="form-control"
    //      type="text"
    //      name="status"
    //      value={props.atividade.status}
    //      onChange={handleInputChange}
    //    />
    //  </div>
    //  <div class="form-group">
    //    <label>prazo</label>
    //    <input
    //      class="form-control"
    //      type="date"
    //      name="prazo"
    //      value={props.atividade.prazo}
    //      onChange={handleInputChange}
    //    />
    //  </div>
    //  <div class="form-group">
    //    <label>agendaInicio</label>
    //    <input
    //      class="form-control"
    //      type="date"
    //      name="agendaInicio"
    //      value={props.atividade.agendaInicio}
    //      onChange={handleInputChange}
    //    />
    //  </div>
    //  
    //  <div class="form-group">
    //    <button
    //      type="button"
    //      onClick={props.salvar}
    //      className="btn btn-primary btn-sm"
    //    >
    //      Salvar
    //    </button>
    //    <button
    //      type="button"
    //      onClick={props.cancelar}
    //      className="btn btn-primary btn-sm"
    //    >
    //      Cancelar
    //    </button>
    //  </div>
    //</form>

  );
};
export default AtividadeForm;
