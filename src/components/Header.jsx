export const Header = ({ nombre, profesion }) => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#000', color: '#ffcc00', textAlign: 'center', borderBottom: '3px solid #ffcc00', boxShadow: '0 4px 15px rgba(255, 204, 0, 0.15)' }}>
      <h1 style={{ textTransform: 'uppercase', letterSpacing: '2px', margin: '0' }}>{nombre}</h1>
      <h2 style={{ color: '#fff', fontWeight: '300', fontSize: '1.2rem', marginTop: '10px' }}>{profesion}</h2>
    </header>
  );
};