export const Header = ({ nombre, profesion }) => {
    return (
        <header style={{ padding: '20px', backgroundColor: '#282c34', color: 'white', textAlign: 'center' }}>
            <h1>{nombre}</h1>
            <h2>{profesion}</h2>
        </header>

            );  
};