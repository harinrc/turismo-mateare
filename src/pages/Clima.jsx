import React, { useState, useEffect } from 'react';

export default function Clima() {
  // Estado para almacenar los datos del clima
  const [datosClima, setDatosClima] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Aquí se simula la consulta (Fetch) a la API de Clima para el municipio de Mateare
    setTimeout(() => {
      setDatosClima({
        temperatura: 31,
        condicion: "Parcialmente Nublado",
        humedad: "68%",
        viento: "14 km/h",
        recomendacion: "Buen clima para visitar las playas y lagunas de Mateare, ¡no olvides tu protector solar!"
      });
      setCargando(false);
    }, 1000); // Tarda 1 segundo en cargar para simular internet
  }, []);

  if (cargando) {
    return (
      <div style={{ padding: '30px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h3>Cargando información meteorológica de Mateare...</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '15px',
        padding: '25px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        border: '1px solid #eaeaea',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#333', marginBottom: '5px' }}>Mateare, Managua</h2>
        <p style={{ color: '#888', margin: '0 0 20px 0' }}>Estado del Tiempo Actual</p>

        {/* Círculo de Temperatura */}
        <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#ff9f43',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto 20px auto',
          boxShadow: '0 4px 10px rgba(255,159,67,0.3)'
        }}>
          <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{datosClima.temperatura}°C</span>
          <span style={{ fontSize: '0.8rem' }}>Caluroso</span>
        </div>

        <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>{datosClima.condicion}</h3>

        {/* Detalles en Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          borderTop: '1px solid #eee',
          paddingTop: '20px',
          marginBottom: '20px'
        }}>
          <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
            <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Humedad</span>
            <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#444' }}>{datosClima.humedad}</p>
          </div>
          <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
            <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Viento</span>
            <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#444' }}>{datosClima.viento}</p>
          </div>
        </div>

        {/* Recomendación al Turista */}
        <div style={{
          backgroundColor: '#f0f9ff',
          borderLeft: '4px solid #007bff',
          padding: '15px',
          borderRadius: '4px',
          textAlign: 'left'
        }}>
          <strong style={{ color: '#0056b3', display: 'block', marginBottom: '3px' }}>Consejo de viaje:</strong>
          <span style={{ color: '#555', fontSize: '0.95rem' }}>{datosClima.recomendacion}</span>
        </div>

      </div>

    </div>
  );
}