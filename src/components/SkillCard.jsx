export const SkillCard = ({ habilidad }) => {
  return (
    <li 
      style={{ 
        display: 'inline-block', 
        margin: '8px', 
        padding: '10px 18px', 
        backgroundColor: '#111', 
        border: '1px solid #ffcc00', 
        borderRadius: '4px', 
        color: '#ffcc00',
        fontWeight: 'bold',
        boxShadow: '0 0 8px rgba(255,204,0,0.25)'
      }}
    >
      {habilidad}
    </li>
  );
};