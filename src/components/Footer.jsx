export const Footer = ({ anio, githubLink, linkedinLink }) => {
  return (
    <footer style={{ padding: '30px', backgroundColor: '#1f2329', color: 'white', textAlign: 'center', marginTop: '20px' }}>
      <p>© {anio} Esteban Daniel Pedraza. Todos los derechos reservados.</p>
      <p style={{ marginTop: '10px' }}>
        Encuéntrame en:{' '}
        <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#646cff', textDecoration: 'none', margin: '0 10px' }}>
          GitHub
        </a> 
        | 
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ color: '#646cff', textDecoration: 'none', margin: '0 10px' }}>
          Linkedin
        </a>
      </p>
    </footer>
  );
};