import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { WhatWeDo, HowWeWork, AIInAction, Testimonials, FinalCTA } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <AIInAction />
      <Testimonials />
      <FinalCTA />
      <footer className="border-t border-white/10 py-8 text-center text-cyan-100/60 bg-[#0B0C10]">Powered by Intelligence. Defined by Humanity.</footer>
    </div>
  )
}

export default App
