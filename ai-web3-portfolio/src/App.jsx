import './App.css';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Stacks } from './components/Stacks';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Stacks />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <div>
          <span>© {new Date().getFullYear()} Ramadanzakbar</span>
          <span>Kode yang disusun dengan etika & eksplorasi masa depan.</span>
        </div>
        <div className="footer__links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            X/Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
