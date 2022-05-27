import React from "react";
const RequisicaoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [name]: value });
  };
  return (
    <form>
      <div class="form-group">
        <label>Nome</label>
        <input
          class="form-control"
          type="text"
          name="nome"
          value={props.requisicao.nome}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          class="form-control"
          type="text"
          name="email"
          value={props.requisicao.email}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <label>Senha</label>
        <input
          class="form-control"
          type="password"
          name="senha"
          value={props.requisicao.senha}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <button
          type="button"
          onClick={props.salvar}
          className="btn btn-primary btn-sm"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={props.cancelar}
          className="btn btn-primary btn-sm"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
export default RequisicaoForm;
