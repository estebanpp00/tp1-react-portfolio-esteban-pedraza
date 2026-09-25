export const Footer = ({ anio, redes }) => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#282c34', color: 'white', textAlign: 'center', marginTop: '20px' }}>
      <p>© {anio} Mi Portfolio. Todos los derechos reservados.</p>
      <p>Me encuentran en: {redes}</p>
    </footer>
  );
};