import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside style={{ width: '30%', backgroundColor: '#111', color: '#fff', padding: '20px', minHeight: '100vh', boxSizing: 'border-box' }}>
            <h2 style={{ color: '#ffcc00' }}>Esteban Pedraza</h2>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Desarrollador Web</p>
        </aside>
    );
};

export default Sidebar;