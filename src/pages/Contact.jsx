export const Contact = () => {
  return (
    <section style={{ maxWidth: '600px', margin: '0 auto', padding: '20px 0', backgroundColor: '#0f0f12' }}>
      <h2 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', textAlign: 'center' }}>
        Contacto
      </h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px', color: '#b0b0b0' }}>
        Podés ponerte en contacto conmigo para proyectos, colaboraciones o consultas a través de los siguientes medios:
      </p>

      <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #ffcc00', boxShadow: '0 4px 6px rgba(0,0,0,0.5)' }}>
        <p style={{ marginBottom: '12px' }}><strong>Email:</strong> esteban.cat129@gmail.com</p>
        <p style={{ marginBottom: '12px' }}><strong>GitHub:</strong> <a href="https://github.com/estebanpp00" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ffcc00' }}>github.com/estebanpp00</a></p>
        <p style={{ marginBottom: '12px' }}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/esteban-pedraza-0a1b2b1b3" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ffcc00' }}>linkedin.com/in/esteban-pedraza-0a1b2b1b3</a></p>
        <p style={{ margin: 0 }}><strong>Ubicación:</strong> Tucumán, Argentina</p>
      </div>
    </section>
  );
};