const colaboradorList = (props) => (

    
    <div>
        <h4>Listagem de Colaboradores</h4>
        <button onClick={props.onClickAtualizar} className="btn btn-primary btn-sm" type="button">Atualizar Lista</button>
        <button type="button" className="btn btn-primary btn-sm" onClick={props.inserir}>Inserir</button>
        <table className="table">
            <thead>
                <tr> <th>Index</th><th>Nome</th><th>Email</th><th>senha</th>
                </tr>
            </thead>
            <tbody>
                {props.colaboradores.length > 0 ? (props.colaboradores.map((o, index) => (
                    <tr key={index}>
                        <td>{index}</td> <td>{o.nome}</td> <td>{o.email}</td> <td>{o.senha}</td>
                        <td>
                        <button onClick={() => props.editar(o.id)} className="btn btn-primary btn-sm">Editar</button>
                        <button onClick={() => props.excluir(o.id)} className="btn btn-danger btn-sm">Excluir</button>
                        </td>         
                    </tr>
                ))) : (
                    <tr> <td colSpan={3}>Nenhum Colaborador.</td> </tr>
                )}
            </tbody>
        </table>
    </div>
)

export default colaboradorList