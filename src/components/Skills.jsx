export const Skills = () => {
    const habilidades = ["Javascript", "React", "Node.js", "HTML", "CSS", "Git", "SQL", "MongoDB"];
    return (
        <section style={{ padding: '20px', textAlign: 'center' }}>
            <h3>Mis habilidades</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {habilidades.map(habilidad => () => (
                    <li
                    key={habilidad}
                    style={{ display: 'inline-block', margin: '10px', padding: '10px', backgroundColor: '#eee', borderRadius: '5px', color: 'black' }}
                    >
                        {habilidad}
                    </li>
                ))}
                </ul>
                </section>
    );
};