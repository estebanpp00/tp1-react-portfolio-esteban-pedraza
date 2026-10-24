import { BrowserRoute, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { Projects } from './pages/Projects';

function App() {
  return (
    <BrowserRoute>
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0a0a0c', color: '#e0e0e0', fontFamily: 'system-ui, sans-serif' }}>
        <Sidebar />
        <main style={{ width: '70%', padding: '30px', boxSizing: 'border-box' }}>

        </main>
      </div>

    </BrowserRoute>
  );
}

export default App;