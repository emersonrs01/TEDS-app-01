import React from 'react'
const AtividadeForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setAtividade({ ...props.atividade, [name]: value })
    }
    return (
        <form>
            <div class="form-group">
                <label>ID</label>
                <input class="form-control" type="text" name="_id" readOnly
                    value={props.atividade._id} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>Nome</label>
                <input class="form-control" type="text" name="nome"
                    value={props.atividade.nome} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>Data</label>
                <input class="form-control" type="datetime-local" name="data"
                    value={props.atividade.data} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>STATUS</label>
                <select class="form-control" type="text" name="status"
                    value={props.atividade.status} onChange={handleInputChange}>
                    <option value="Pendente">Selecione um...</option>
                    <option value="Fazer">A Fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Feito">Feito</option>
                </select>
            </div>
            <div class="form-group">
                <button type="button" onClick={props.salvar}
                    className="btn btn-primary btn-sm">Salvar</button>
                <button type="button" onClick={props.cancelar}
                    className="btn btn-primary btn-sm">Cancelar</button>
            </div>
        </form>
    )
}
export default AtividadeForm