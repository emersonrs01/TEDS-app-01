import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
function Menu() {
    let navigate = useNavigate();
    const items = [
        {
            label: 'Home', icon: 'pi pi-fw pi-home',
            command: () => { navigate("/") }
        },
        {
            label: 'Cadastros', icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Usuários', icon: 'pi pi-fw pi-user',
                    command: () => { navigate("/usuario") }
                },
                {
                    label: 'TiposReq', icon: 'pi pi-fw pi-user',
                    command: () => { navigate("/tiporeq") }
                },
                {
                    label: 'Solicitantes', icon: 'pi pi-fw pi-user',
                    command: () => { navigate("/solicitante") }
                },
                {
                    label: 'Andamento', icon: 'pi pi-fw pi-user',
                    command: () => { navigate("/andamento") }
                },
                {
                    label: 'Atividades', icon: 'pi pi-fw pi-user',
                    command: () => { navigate("/atividade") }
                },
                {
                    label: 'Requisicao', icon: 'pi pi-fw pi-user',
                    command: () => { navigate("/requisicao") }
                }
            ]
        },
        {
            label: 'Sair', icon: 'pi pi-fw pi-power-off'
        }
    ];
    return (<Menubar model={items} />)
}
export default Menu;