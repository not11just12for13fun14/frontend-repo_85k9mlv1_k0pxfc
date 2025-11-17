import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-[#0B0C10]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0B0C10]/40 to-[#0B0C10] pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-cyan-300/80 text-sm mb-3 tracking-[0.25em] uppercase">
          Powered by Intelligence. Defined by Humanity.
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-white text-4xl sm:text-6xl font-semibold leading-tight max-w-4xl">
          Building Tomorrow’s Technology, Today — Powered by AI.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-cyan-100/80 mt-6 max-w-2xl">
          Where experience meets intelligence and design meets data.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="mt-10 flex items-center gap-4">
          <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#0B0C10]">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full blur-md opacity-60 group-hover:opacity-80 transition" />
            <span className="relative bg-cyan-300 text-[#0B0C10] rounded-full px-6 py-3 shadow-[0_0_30px_#00FFFF66]">Talk to an AI Expert</span>
          </a>
          <a href="#services" className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-cyan-300">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/40 to-blue-500/40 blur-xl opacity-40 group-hover:opacity-60 transition" />
            <span className="relative rounded-full border border-cyan-300/40 px-6 py-3 backdrop-blur-sm bg-white/5">Explore Solutions</span>
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(600px 200px at 20% 100%, rgba(0,255,255,0.15), transparent), radial-gradient(600px 200px at 80% 0%, rgba(255,0,128,0.12), transparent)'}} />
    </section>
  )
}
