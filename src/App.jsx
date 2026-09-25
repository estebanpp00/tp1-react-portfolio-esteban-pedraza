import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';

function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#0a0a0c', minHeight: '100vh', margin: 0, padding: 0, color: '#e0e0e0' }}>
      <Header nombre="Esteban Daniel Pedraza" profesion="Desarrollador Web" />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Footer 
        anio="2026" 
        githubLink="https://github.com/estebanpp00" 
        linkedinLink="https://www.linkedin.com/in/esteban-pedraza-82b938284/" 
      />
    </div>
  );
}

export default App;