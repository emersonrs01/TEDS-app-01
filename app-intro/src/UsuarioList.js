const usuarioList = (props) => (

    
    <div>
        <h4>Listagem de usuários</h4>
        <button onClick={props.onClickAtualizar} className="btn btn-primary btn-sm" type="button">Atualizar Lista</button>
        <button type="button" className="btn btn-primary btn-sm" onClick={props.inserir}>Inserir</button>
        <table className="table">
            <thead>
                <tr> <th>Index</th><th>Nome</th><th>Email</th><th>Celular</th><th>idade</th>
                </tr>
            </thead>
            <tbody>
                {props.usuarios.length > 0 ? (props.usuarios.map((o, index) => (
                    <tr key={index}>
                        <td>{index}</td> <td>{o.nome}</td> <td>{o.email}</td> <td>{o.celular}</td><td>{o.idade}</td>
                        <td>
                            <button type="button" className="btn btn-primary btn-sm">Editar</button>
                            <button type="button" className="btn btn-primary btn-sm">Excluir</button>
                        </td>         
                    </tr>
                ))) : (
                    <tr> <td colSpan={3}>Nenhum usuário.</td> </tr>
                )}
            </tbody>
        </table>
    </div>
)

export default usuarioList