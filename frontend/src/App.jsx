import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import JourneySection from './components/JourneySection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider"></div>
        <SkillsSection />
        <div className="section-divider"></div>
        <div id="journey">
          <JourneySection />
        </div>
        <div className="section-divider"></div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div className="section-divider"></div>
        <div id="aboutme">
          <AboutSection />
        </div>
        <div className="section-divider"></div>
        <div id="connectme">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
