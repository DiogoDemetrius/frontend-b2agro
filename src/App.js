import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import ServicoDetalhe from './pages/ServicoDetalhe';  
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/servicos/:id" element={<ServicoDetalhe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
    </Router>
  );
}

export default App;