export const ProjectCard = ({ nombre, descripcion }) => {
    return (
       <div
      style={{
        backgroundColor: '#16161a',
        border: '1px solid #333',
        borderLeft: '4px solid #ffcc00',
        padding: '20px',
        borderRadius: '6px',
        width: '280px',
        textAlign: 'left',
        boxShadow: '0 4px 6px rgba(0,0,0,0.5)'
      }}
    >
        <h3 style={{ color: '#ffcc00', marginTop: '0', fontSize: '1.2rem' }}>{nombre}</h3>
      <p style={{ fontSize: '15px', color: '#b0b0b0', lineHeight: '1.5', margin: '0' }}>{descripcion}</p>
    </div>
    );
};