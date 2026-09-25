import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#242424', minHeight: '100vh' }}>
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