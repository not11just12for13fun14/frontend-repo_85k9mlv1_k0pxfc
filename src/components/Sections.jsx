import { motion } from 'framer-motion'
import { Cpu, Sparkles, Workflow, LineChart, Users2, Shield } from 'lucide-react'

export function WhatWeDo() {
  const items = [
    { title: 'AI-Powered Business Automation', icon: Workflow, desc: 'Streamline operations with intelligent agents, RPA and decision systems.' },
    { title: 'Intelligent Product Engineering', icon: Cpu, desc: 'Design and build scalable, data-driven products with embedded AI.' },
    { title: 'Digital Experience & Transformation', icon: Sparkles, desc: 'Reimagine customer journeys with human-centered, AI-augmented UX.' },
  ]
  return (
    <section id="services" className="relative py-24 bg-[#0B0C10]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(800px 200px at 10% 10%, rgba(0,255,255,0.08), transparent), radial-gradient(600px 300px at 90% 90%, rgba(255,0,128,0.08), transparent)'}} />
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-white font-semibold">What We Do</h2>
        <p className="text-cyan-100/80 mt-2">Designing experiences that think, learn & evolve.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-b from-cyan-400/10 to-transparent" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 shadow-[0_0_25px_#00FFFF44]">
                  <it.icon size={22} />
                </div>
                <div>
                  <h3 className="text-white font-medium">{it.title}</h3>
                  <p className="text-cyan-100/70 text-sm mt-1">{it.desc}</p>
                </div>
              </div>
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="mt-6 text-cyan-300 text-sm">Learn more →</motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowWeWork() {
  const steps = ['Ideate','Design','Develop','Deploy','Scale']
  return (
    <section className="relative py-24 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-white font-semibold">How We Work</h2>
        <p className="text-cyan-100/80 mt-2">We architect the intersection of design, data & AI.</p>
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-cyan-400/30 via-pink-500/20 to-blue-500/30" />
          <div className="relative grid grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="mx-auto w-10 h-10 rounded-full border border-cyan-400/40 bg-black/40 grid place-items-center text-cyan-300 shadow-[0_0_20px_#00FFFF44]">{i+1}</div>
                <p className="text-white mt-3">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AIInAction() {
  const tiles = [
    { title: 'Neural UX', desc: 'Adaptive interfaces that learn user intent.' },
    { title: 'Agentic Ops', desc: 'Autonomous workflows across your stack.' },
    { title: 'Predictive Vision', desc: 'From signals to strategy with ML.' },
    { title: 'Data Products', desc: 'Real-time insights, real-world impact.' },
  ]
  return (
    <section className="relative py-24 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-white font-semibold">AI in Action</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {tiles.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)] animate-pulse" />
              <div className="relative">
                <p className="text-white font-medium">{t.title}</p>
                <p className="text-cyan-100/70 text-sm mt-1">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    { q: 'BRIQUE accelerated our roadmap by months.', a: 'Global Retail CTO' },
    { q: 'Human-first. AI-strong. Remarkable outcomes.', a: 'Fintech Founder' },
    { q: 'Design and data fused into product magic.', a: 'Media COO' },
  ]
  return (
    <section className="relative py-24 bg-[#0B0C10]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-white font-semibold text-center">What Leaders Say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
              <p className="text-cyan-100/90">“{t.q}”</p>
              <p className="text-cyan-300 mt-4 text-sm">— {t.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 bg-[#0B0C10]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(800px_300px_at_50%_0%,rgba(0,255,255,0.15),transparent), radial-gradient(600px_300px_at_50%_100%,rgba(255,0,128,0.12),transparent)'}} />
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl text-white font-semibold">Ready to Build the Future?</h2>
        <p className="text-cyan-100/80 mt-4">Your digital evolution begins with intelligence.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full blur-md opacity-60" />
            <span className="relative bg-cyan-300 text-[#0B0C10] rounded-full px-6 py-3">Schedule a Call</span>
          </a>
          <a href="#" className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-cyan-300">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/40 to-blue-500/40 blur-xl opacity-40" />
            <span className="relative rounded-full border border-cyan-300/40 px-6 py-3 backdrop-blur-sm bg-white/5">Get a Quote</span>
          </a>
        </div>
      </div>
    </section>
  )
}
