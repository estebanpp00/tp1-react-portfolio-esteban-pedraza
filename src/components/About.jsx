import { useState } from 'react';

export const About = () => {
    const [mostrarMas, setMostrarMas] = useState(false);

    const toggleMostrar = () => {
        setMostrarMas(!mostrarMas);
    };

    return (
        <section style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#141416', color: '#d1d1d1' }}>
            <h2 style={{ color: '#ffcc00', textTransform: 'uppercase' }}>Sobre mí</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
               Hola! soy estudiante de la Tecnicatura Universitaria en Programación en la UTN, me gusta mucho la tecnologia en general y el desarrollo web en particular. Me considero una persona curiosa y autodidacta, siempre buscando aprender nuevas tecnologías y mejorar mis habilidades de programación.
            </p>

            {mostrarMas && (
                <div style={{ marginTop: '20px', color: '#a0a0a0', maxWidth: '700px', margin: '20px auto 0 auto', lineHeight: '1.6' }}>
                    <p>
                        Además de la programación, soy musico. Mi instrumento principal es la guitarra y estuve en una dos bandas, en una de ellas lanzamos un EP y en la que estoy actualmente estamos en proceso de lanzar el nuevo disco. Siempre busco de alguna manera relacionar mi pasion por la tecnologia con mi pasion por la musica, ya sea creando aplicaciones web con amigos musicos o explorando nuevas formas de integrar la tecnologia en la musica.
                    </p>
                </div>
            )}

            <button
                onClick={toggleMostrar}
                style={{
                    marginTop: '25px',
                    padding: '10px 24px',
                    cursor: 'pointer',
                    backgroundColor: '#ffcc00',
                    color: '#000',
                    border: 'none',
                    borderRadius: '3px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.5)'
                }}
            >
                {mostrarMas ? "Ver menos" : "Ver más"}
            </button>
        </section>
    );
};