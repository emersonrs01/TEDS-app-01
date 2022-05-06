import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';
const Home = lazy(() => import('./pages/home/Home'));
const UsuarioCon = lazy(() => import('./pages/colaboradores/ColaboradorCon'));
function App() {
  return (
    <BrowserRouter >
      <Menu />
      <Suspense fallback={<div>Carregando ... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuario" element={<UsuarioCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}
export default App;