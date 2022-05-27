import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';
const Home = lazy(() => import('./pages/home/Home'));
const UsuarioCon = lazy(() => import('./pages/colaboradores/ColaboradorCon'));
const TipoReq = lazy(() => import('./pages/tipoRequisicao/TipoReqCon'));
const Solicitante = lazy(() => import('./pages/Solicitante/SolicitanteCon'));
const Andamento = lazy(() => import('./pages/Andamento/AndamentoCon'));
const Atividade = lazy(() => import('./pages/Atividade/AtividadeCon'));
const Requisicao = lazy(() => import('./pages/Requisicao/RequisicaoCon'));
function App() {
  return (
    <BrowserRouter >
      <Menu />
      <Suspense fallback={<div>Carregando ... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuario" element={<UsuarioCon />} />
          <Route path="/tiporeq" element={<TipoReq />} />
          <Route path="/solicitante" element={<Solicitante />} />
          <Route path="/andamento" element={<Andamento />} />
          <Route path="/atividade" element={<Atividade />} />
          <Route path="/requisicao" element={<Requisicao />} />
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}
export default App;