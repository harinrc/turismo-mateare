import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '15px 30px', 
      background: '#007bff', 
      color: 'white'
    }}>
      <h3>Turismo Mateare</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
        <Link to="/clima" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Clima</Link>
        <Link to="/registro" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Registrar Servicio</Link>
      </div>
    </nav>
  );
}