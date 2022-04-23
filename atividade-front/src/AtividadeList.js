const AtividadeList = (props) => (

    
    <div>
        <h4>Listagem de Atividades</h4>
        <button onClick={props.onClickAtualizar} className="btn btn-primary btn-sm" type="button">Atualizar Lista</button>
        <button type="button" className="btn btn-primary btn-sm" onClick={props.inserir}>Inserir</button>
        <table className="table">
            <thead>
                <tr> <th>Index</th><th>Nome</th><th>Data</th><th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {props.atividades.length > 0 ? (props.atividades.map((o, index) => (
                    <tr key={index}>
                        <td>{o._id}</td> <td>{o.nome}</td> <td>{o.data}</td> <td>{o.status}</td>
                        <td>
                        <button onClick={() => props.editar(o._id)} className="btn btn-primary btn-sm">Editar</button>
                        <button onClick={() => props.excluir(o._id)} className="btn btn-danger btn-sm">Excluir</button>
                        </td>         
                    </tr>
                ))) : (
                    <tr> <td colSpan={3}>Nenhuma Atividade.</td> </tr>
                )}
            </tbody>
        </table>
    </div>
)

export default AtividadeList