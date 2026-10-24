import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <h2 style={{ color: '#ffcc00', letterSpacing: '2px' }}>Esteban Pedraza</h2>
      <p style={{ fontSize: '0.9rem', color: '#aaa', letterSpacing: '1px' }}>Desarrollador Web</p>   
      <nav style={{ marginTop: '20px' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '12px', marginLeft: '10px' }}>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({ color: isActive ? '#ffcc00' : '#fff', textDecoration: 'none' })}
            >
              Inicio
            </NavLink>
          </li>
          <li style={{ marginBottom: '12px', marginLeft: '10px' }}>
            <NavLink 
              to="/about" 
              style={({ isActive }) => ({ color: isActive ? '#ffcc00' : '#fff', textDecoration: 'none' })}
            >
              Sobre mí
            </NavLink>
          </li>
          <li style={{ marginBottom: '12px', marginLeft: '10px'  }}>
            <NavLink 
              to="/skills" 
              style={({ isActive }) => ({ color: isActive ? '#ffcc00' : '#fff', textDecoration: 'none' })}
            >
              Habilidades
            </NavLink>
          </li>
          <li style={{ marginBottom: '12px', marginLeft: '10px' }}>
            <NavLink 
              to="/projects" 
              style={({ isActive }) => ({ color: isActive ? '#ffcc00' : '#fff', textDecoration: 'none' })}
            >
              Proyectos
            </NavLink>
          </li>
          <li style={{ marginBottom: '12px', marginLeft: '10px' }}>
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