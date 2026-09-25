export const Footer = ({ anio, githubLink, linkedinLink }) => {
  return (
    <footer style={{ padding: '40px 20px', backgroundColor: '#000', color: '#666', textAlign: 'center', borderTop: '2px solid #ffcc00' }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>© {anio} Esteban Daniel Pedraza. Todos los derechos reservados.</p>
      <p style={{ margin: '0', fontSize: '14px' }}>
        Me encontras en:{' '}
        <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#ffcc00', textDecoration: 'none', fontWeight: 'bold', margin: '0 5px' }}>
          GitHub
        </a> 
        | 
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ color: '#ffcc00', textDecoration: 'none', fontWeight: 'bold', margin: '0 5px' }}>
          Linkedin
        </a>
      </p>
    </footer>
  );
};