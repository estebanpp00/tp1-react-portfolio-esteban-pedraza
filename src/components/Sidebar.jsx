import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside style={{ width: '30%', backgroundColor: '#111', color: '#fff', padding: '20px', minHeight: '100vh', boxSizing: 'border-box' }}>
            <h2 style={{ color: '#ffcc00' }}>Esteban Pedraza</h2>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Desarrollador Web</p>
            <nav style={{ marginTop: '30px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '15px' }}>
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({ color: isActive ? '#ffcc00' : '#fff', textDecoration: 'none' })}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <NavLink
                            to="/about"
                            style={({ isActive }) => ({ color: isActive ? '#ffcc00' : '#fff', textDecoration: 'none' })}
                        >
                            Sobre mí
                        </NavLink>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <NavLink
                            to="/skills"
                            style={({ isActive }) => ({ color: isActive ? '#ffcc00' : '#fff', textDecoration: 'none' })}
                        >
                            Habilidades
                        </NavLink>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <NavLink
                            to="/projects"
                            style={({ isActive }) => ({ color: isActive ? '#ffcc00' : '#fff', textDecoration: 'none' })}
                        >
                            Proyectos
                        </NavLink>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({ color: isActive ? '#ffcc00' : '#fff', textDecoration: 'none' })}
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;