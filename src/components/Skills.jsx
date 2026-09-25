export const Skills = () => {
  const habilidades = ["JavaScript", "React", "HTML", "CSS", "Node.js", "MongoDB", "Git", "GitHub", "Bootstrap", "Tailwind CSS", "SQLite", "REST APIs", "Responsive Design", "UI/UX Design"];

  return (
    <section style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#0a0a0c' }}>
      <h3 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Mis Habilidades</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {habilidades.map((habilidad) => (
          <li 
            key={habilidad} 
            style={{ 
              display: 'inline-block', 
              margin: '10px', 
              padding: '10px 20px', 
              backgroundColor: '#111', 
              border: '1px solid #ffcc00', 
              borderRadius: '4px', 
              color: '#ffcc00',
              fontWeight: 'bold',
              boxShadow: '0 0 8px rgba(255,204,0,0.3)'
            }}
          >
            {habilidad}
          </li>
        ))}
      </ul>
    </section>
  );
};