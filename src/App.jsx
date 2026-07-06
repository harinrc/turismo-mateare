import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Clima from './pages/Clima';
import Registro from './pages/Registro';

export default function App() {
  return (
    // Usamos HashRouter (#) porque es el más compatible con GitHub Pages
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/clima" element={<Clima />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}