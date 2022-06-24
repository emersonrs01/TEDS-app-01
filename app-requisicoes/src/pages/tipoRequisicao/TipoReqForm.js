import React from "react";
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
import { InputText } from 'primereact/inputtext';

const TipoReqForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setTipoReq({ ...props.tipoReq, [name]: value });
  };
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    // Validar senha e contra senha. Se diferentes gerar erro na senha. 
      props.salvar(); 
    }
    
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Tipos de Requisicao</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">descricao</label>
              <InputText id="descricao" defaultValue={props.tipoReq.descricao}
                {...register("descricao", { 
                  required: {value:true, message:"O descricao é obrigatório."}, 
                  minLength: {value:2, message:"O descricao deve ter pelo menos 2 caracteres."}, 
                  maxLength: {value:50, message:"O descricao deve ter no máximo 50 caracteres."} 
                })}
                onChange={handleInputChange} />
              {errors.descricao && <span style={{color:'red'}}>{errors.descricao.message}</span>}  
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
export default TipoReqForm;
