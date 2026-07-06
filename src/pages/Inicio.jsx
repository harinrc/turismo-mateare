import React from 'react';

// Datos de prueba locales (Simulan lo que vendrá de la base de datos)
const atractivosMateare = [
  {
    id: 1,
    nombre: "Laguna de Xiloá",
    categoria: "Naturaleza",
    imagen: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500", // Cambia por fotos reales luego
    descripcion: "Espectacular laguna de origen volcánico. Un espacio natural ideal para la recreación, natación y deportes acuáticos.",
    contacto: "Acceso Público"
  },
  {
    id: 2,
    nombre: "Mirador Apoyeque",
    categoria: "Aventura",
    imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500",
    descripcion: "Para los amantes del senderismo. Ofrece una vista impresionante hacia una de las lagunas más protegidas y bellas de la cordillera.",
    contacto: "Guiado obligatorio"
  },
  {
    id: 3,
    nombre: "Centro Turístico El Apante",
    categoria: "Recreación / Gastronomía",
    imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
    descripcion: "Establecimientos locales a las orillas del Lago Xolotlán que ofrecen excelente gastronomía marina como el tradicional pescado frito.",
    contacto: "Emprendedores Locales"
  }
];

export default function Inicio() {
  return (
    <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Sección Hero Informativa */}
      <div style={{
        textAlign: 'center',
        backgroundColor: '#e6f2ff',
        padding: '40px 20px',
        borderRadius: '12px',
        marginBottom: '40px'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#0056b3', marginBottom: '10px' }}>Descubre el Municipio de Mateare</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
          Potenciando el turismo nacional e internacional. Explora accesos de información digital de nuestros mejores atractivos y apoya al comercio local.
        </p>
      </div>

      {/* Título de la sección */}
      <h3 style={{ fontSize: '1.5rem', color: '#333', borderBottom: '3px solid #007bff', display: 'inline-block', paddingBottom: '5px', marginBottom: '25px' }}>
        Atractivos y Servicios Destacados
      </h3>

      {/* Grid de tarjetas dinámicas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '25px'
      }}>
        {atractivosMateare.map((sitio) => (
          <div key={sitio.id} style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            border: '1px solid #eee',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img src={sitio.imagen} alt={sitio.nombre} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#007bff', fontWeight: 'bold', marginBottom: '5px' }}>
                {sitio.categoria}
              </span>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '1.3rem', color: '#222' }}>{sitio.nombre}</h4>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.4', marginBottom: '15px', flexGrow: 1 }}>
                {sitio.descripcion}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <small style={{ color: '#888' }}>📍 {sitio.contacto}</small>
                <button style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '8px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>Ver Ruta</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}