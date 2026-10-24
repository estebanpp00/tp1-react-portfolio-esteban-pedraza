import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0a0a0c', color: '#e0e0e0', fontFamily: 'system-ui, sans-serif' }}>
        <Sidebar />
        <main style={{ width: '70%', padding: '30px', boxSizing: 'border-box' }}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
        </main>
      </div>

    </BrowserRouter>
  );
}

export default App;