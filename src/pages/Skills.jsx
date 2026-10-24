import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const habilidades = [
    "JavaScript", "React", "HTML", "CSS", "Node.js", 
    "MongoDB", "Git", "GitHub", "Bootstrap", 
    "Tailwind CSS", "SQLite", "REST APIs"
  ];

  return (
    <section style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#0f0f12' }}>
      <h2 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '25px' }}>
        Mis Habilidades
      </h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {habilidades.map((habilidad) => (
          <SkillCard key={habilidad} habilidad={habilidad} />
        ))}
      </ul>
    </section>
  );
};