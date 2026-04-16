import './App.css'
import FrameLounge from './components/Frame-lounge/frameLounge'
import Header from './components/Header/Header'
import HeroSection from './components/Hero/HeroSection'
import Brands from './components/Brands/Brands'
import SmoothCursor from './components/SmoothCursor/SmoothCursor'
import AboutSection1 from './components/ui/about-section-1'
import TestimonialsColumnsSection from './reviews/testimonials-columns-1'
import ModemAnimatedFooter from './components/ui/modem-animated-footer'

function App() {
  return (
    <div className="app-shell">
      <SmoothCursor />
      <Header />
      <main id="top">
        <HeroSection />
        <FrameLounge />
        <Brands />
        <AboutSection1 />
        <TestimonialsColumnsSection />
        <ModemAnimatedFooter />
      </main>
    </div>
  )
}

export default App
