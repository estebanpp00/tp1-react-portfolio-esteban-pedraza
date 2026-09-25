export const Projects = () => {

    const proyectos = [
        { id: 1, nombre: "Portfolio React", descripcion: "Mi primer trabajo práctico integrador usando React y Vite." },
        { id: 2, nombre: "Práctica Web Digitalers", descripcion: "Ejercicios de desarrollo web realizados durante el curso Digitalers." },
        { id: 3, nombre: "Maquetado RollingCode", descripcion: "Proyectos de interfaz de usuario de mi formación en RollingCode School." },
        { id: 4, nombre: "Proyecto FedesLab", descripcion: "Trabajo que realice con un amigo para FedesLab en el cual hicimos uso de api y frameworks. " },
        { id: 5, nombre: "Correo Argentino", descripcion: "Trabajé durante las elecciones del año 2025 como operador de telegramas." }
    ];

    return (
        <section style={{ padding: '20px', textAlign: 'center', backgroundColor: '#1e1e1e', color: 'white' }}>
            <h2>Mis Proyectos</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>


                {proyectos.map((proyecto) => (
                    <div key={proyecto.id} style={{ border: '1px solid #444', padding: '15px', borderRadius: '8px', width: '250px' }}>
                        <h3>{proyecto.nombre}</h3>
                        <p style={{ fontSize: '14px', color: '#ccc' }}>{proyecto.descripcion}</p>
                    </div>
                ))}

            </div>
        </section>
    );
};