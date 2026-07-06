import React, { useState } from 'react';

export default function Registro() {
  // Estado único para controlar todos los campos del formulario
  const [negocio, setNegocio] = useState({
    nombre: '',
    categoria: 'Alimentación',
    descripcion: '',
    contacto: '',
    ubicacion: ''
  });

  // Estado para simular que el formulario se envió con éxito
  const [enviado, setEnviado] = useState(false);

  // Función para capturar los cambios en los inputs en tiempo real
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNegocio({
      ...negocio,
      [name]: value
    });
  };

  // Función que se ejecuta al presionar "Publicar Servicio"
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Datos del nuevo negocio listos para guardar:", negocio);
    
    // Aquí es donde más adelante conectarás tu script de inserción
    setEnviado(true);
    
    // Limpiar el formulario después de enviar
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        border: '1px solid #eee'
      }}>
        <h2 style={{ color: '#0056b3', marginBottom: '10px', textAlign: 'center' }}>Registrar Servicio Turístico</h2>
        <p style={{ color: '#666', textAlign: 'center', fontSize: '0.95rem', marginBottom: '25px' }}>
          Impulsa tu negocio en Mateare. Llena los datos correspondientes para publicar tu establecimiento en la plataforma digital.
        </p>

        {enviado && (
          <div style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '20px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            ¡Registro enviado con éxito! Pendiente de aprobación por el administrador.
          </div>
        )}

        <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Nombre del Negocio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontWeight: 'bold', color: '#444', fontSize: '0.9rem' }}>Nombre del Establecimiento / Atractivo:</label>
            <input 
              type="text" 
              name="nombre"
              value={negocio.nombre}
              onChange={manejarCambio}
              required
              placeholder="Ej: Restaurante El Pescado Frito" 
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
            />
          </div>

          {/* Categoría del Servicio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontWeight: 'bold', color: '#444', fontSize: '0.9rem' }}>Categoría de Servicio:</label>
            <select 
              name="categoria"
              value={negocio.categoria}
              onChange={manejarCambio}
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem', backgroundColor: '#fff' }}
            >
              <option value="Alimentación">Alimentación (Restaurantes, Cafetines, Comiderías)</option>
              <option value="Hospedaje">Hospedaje (Hoteles, Hostales, Cabañas)</option>
              <option value="Actividades">Actividades Recreativas (Tours, Senderismo, Alquiler de botes)</option>
            </select>
          </div>

          {/* Descripción */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontWeight: 'bold', color: '#444', fontSize: '0.9rem' }}>Descripción del Servicio:</label>
            <textarea 
              name="descripcion"
              value={negocio.descripcion}
              onChange={manejarCambio}
              required
              rows="4"
              placeholder="Describe detalladamente qué ofreces al turista, precios estimados y horarios de atención..." 
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem', resize: 'vertical' }}
            />
          </div>

          {/* Datos de Contacto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontWeight: 'bold', color: '#444', fontSize: '0.9rem' }}>Número de Teléfono o Enlace de Contacto:</label>
            <input 
              type="text" 
              name="contacto"
              value={negocio.contacto}
              onChange={manejarCambio}
              required
              placeholder="Ej: +505 8888-8888 o página de Facebook" 
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
            />
          </div>

          {/* Dirección o Coordenadas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontWeight: 'bold', color: '#444', fontSize: '0.9rem' }}>Dirección exacta o coordenadas de Geolocalización:</label>
            <input 
              type="text" 
              name="ubicacion"
              value={negocio.ubicacion}
              onChange={manejarCambio}
              required
              placeholder="Ej: Del parque central de Mateare 2c. al norte" 
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
            />
          </div>

          {/* Botón de Envío */}
          <button 
            type="submit" 
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'background 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
          >
            Publicar Servicio Turístico
          </button>

        </form>
      </div>

    </div>
  );
}