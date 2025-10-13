import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HeroSection } from './sections/hero';
import { StackSection } from './sections/stack';
import { ProjectsSection } from './sections/projects';
import { ExperienceSection } from './sections/experience';
import { ContactSection } from './sections/contact';

const App = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-night-900 text-white">
    <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[40vh] bg-[radial-gradient(circle_at_top,_rgba(157,114,255,0.25),_transparent_55%)] blur-3xl" />
    <Navbar />
    <main className="relative z-10 flex flex-col gap-0">
      <HeroSection />
      <StackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default App;
