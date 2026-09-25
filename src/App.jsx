import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#242424', minHeight: '100vh' }}>
      <Header nombre="Esteban Daniel Pedraza" profesion="Desarrollador Web" />


      <About />

      <Skills />

      <Projects />

      <Footer anio="2026" redes="GitHub | LinkedIn" />
    </div>
  );
}

export default App;