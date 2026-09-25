export const Projects = () => {

    const proyectos = [
        { id: 1, nombre: "Portfolio React", descripcion: "Mi primer trabajo práctico integrador usando React y Vite." },
        { id: 2, nombre: "Práctica Web Digitalers", descripcion: "Ejercicios de desarrollo web realizados durante el curso Digitalers." },
        { id: 3, nombre: "Maquetado RollingCode", descripcion: "Proyectos de interfaz de usuario de mi formación en RollingCode School." },
        { id: 4, nombre: "Proyecto FedesLab", descripcion: "Trabajo que realice con un amigo para FedesLab en el cual hicimos uso de api y frameworks. " },
        { id: 5, nombre: "Correo Argentino", descripcion: "Trabajé durante las elecciones del año 2025 como operador de telegramas." }
    ];

    return (
        <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#0f0f12', borderTop: '1px solid #222' }}>
            <h2 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '30px' }}>Mis Proyectos</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>


                {proyectos.map((proyecto) => (
                    <div
                        key={proyecto.id}
                        style={{
                            backgroundColor: '#16161a',
                            border: '1px solid #333',
                            borderLeft: '4px solid #ffcc00', /* Detalle amarillo lateral */
                            padding: '20px',
                            borderRadius: '6px',
                            width: '280px',
                            textAlign: 'left',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.5)'
                        }}
                    >
                        <h3 style={{ color: '#ffcc00', marginTop: '0', fontSize: '1.2rem' }}>{proyecto.nombre}</h3>
                        <p style={{ fontSize: '15px', color: '#b0b0b0', lineHeight: '1.5', margin: '0' }}>{proyecto.descripcion}</p>
                    </div>
                ))}

            </div>
        </section>
    );
};