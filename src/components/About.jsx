import { useState } from 'react';

export const About = () => {

    const [mostrarMas, setMostrarMas] = useState(false);

    const toggleMostrar = () => {
        setMostrarMas(!mostrarMas);
    };

    return (
        <section style={{ padding: '20px', textAlign: 'center', backgroundColor: '#1e1e1e', color: 'white' }}>
            <h2>Sobre mí</h2>
            <p>
                Hola! soy estudiante de la Tecnicatura Universitaria en Programación en la UTN, me gusta mucho la tecnologia en general y el desarrollo web en particular. Me considero una persona curiosa y autodidacta, siempre buscando aprender nuevas tecnologías y mejorar mis habilidades de programación.
            </p>


            {mostrarMas && (
                <div style={{ marginTop: '15px', color: '#ccc' }}>
                    <p>
                        Además de la programación, soy musico. Mi instrumento principal es la guitarra y estuve en una dos bandas, en una de ellas lanzamos un EP y en la que estoy actualmente estamos en proceso de lanzar el nuevo disco. Siempre busco de alguna manera relacionar mi pasion por la tecnologia con mi pasion por la musica, ya sea creando aplicaciones web con amigos musicos o explorando nuevas formas de integrar la tecnologia en la musica.
                    </p>
                </div>
            )}

            <button
                onClick={toggleMostrar}
                style={{ marginTop: '15px', padding: '8px 16px', cursor: 'pointer', backgroundColor: '#646cff', color: 'white', border: 'none', borderRadius: '4px' }}
            >
                {mostrarMas ? "Ver menos" : "Ver más"}
            </button>
        </section>
    );
};