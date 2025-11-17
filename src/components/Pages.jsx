import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

export function AboutPage() {
  const leaders = [
    { role: 'CEO', name: 'Aarav Mehta', blurb: 'Vision-led operator shaping human-tech harmony.' },
    { role: 'CIO', name: 'Nisha Rao', blurb: 'Architecture and platforms for scale.' },
    { role: 'CAIO', name: 'Kabir Shah', blurb: 'Applied AI across products and ops.' },
    { role: 'CFO', name: 'Maya Iyer', blurb: 'Strategic finance powering innovation.' },
  ]
  return (
    <div className="bg-[#0B0C10] text-cyan-50">
      <section className="relative min-h-[70vh] grid md:grid-cols-2">
        <div className="relative h-full min-h-[50vh]">
          <video className="w-full h-full object-cover opacity-70" autoPlay loop muted playsInline>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-colorful-abstract-neon-lines-1361-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <div className="flex items-center p-8 lg:p-16">
          <div>
            <p className="text-cyan-300/80 text-sm tracking-[0.25em] uppercase">About Us</p>
            <h1 className="text-4xl font-semibold mt-3">People, Data, and Design — in perfect harmony.</h1>
            <p className="text-cyan-100/80 mt-4">We make technology human — transforming businesses through experience and AI-driven strategy.</p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-cyan-400/10 to-transparent" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-[0_0_20px_#00FFFF66]" />
                <p className="text-white mt-4 font-medium">{m.name}</p>
                <p className="text-cyan-300 text-sm">{m.role}</p>
                <p className="text-cyan-100/70 text-sm mt-2">{m.blurb}</p>
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-cyan-300"><Linkedin size={16} /> LinkedIn</a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            ['10+','Years'],['50+','Projects'],['10+','Countries']
          ].map(([n,l]) => (
            <div key={n}>
              <p className="text-5xl font-semibold text-white">{n}</p>
              <p className="text-cyan-100/70">{l}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export function ServicesPage() {
  const panels = [
    { title: 'AI Business Automation', desc: 'Agents, copilots, orchestration, and decision systems.' },
    { title: 'Intelligent Product Engineering', desc: 'From prototypes to platforms with embedded AI.' },
    { title: 'Digital Experience & Transformation', desc: 'Service design, UX, and journeys powered by data.' },
  ]
  return (
    <div className="bg-[#0B0C10] text-cyan-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-semibold">Services</h1>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
          {panels.map((p, i) => (
            <details key={p.title} className="group bg-white/5 backdrop-blur-xl open:bg-white/10">
              <summary className="list-none cursor-pointer px-6 py-6 flex items-center justify-between">
                <span className="text-white">{p.title}</span>
                <span className="text-cyan-300 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="px-6 pb-6 text-cyan-100/80">
                <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-blue-500 rounded-full mb-4" />
                {p.desc}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

export function InsightsPage() {
  const posts = Array.from({ length: 8 }).map((_, i) => ({
    title: `Design × Data × AI — Insight ${i + 1}`,
    category: ['AI', 'Automation', 'Design', 'Strategy'][i % 4],
  }))
  return (
    <div className="bg-[#0B0C10] text-cyan-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-semibold">Insights</h1>
        <div className="flex gap-3 mt-6">
          {['AI','Automation','Design','Strategy'].map((c) => (
            <button key={c} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm">{c}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <p className="text-cyan-300 text-xs">{p.category}</p>
              <h3 className="text-white mt-2 group-hover:translate-y-[-2px] transition">{p.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export function ContactPage() {
  return (
    <div className="bg-[#0B0C10] text-cyan-50 min-h-screen">
      <section className="relative max-w-4xl mx-auto px-4 py-24">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(0,255,255,0.12),transparent)]" />
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h1 className="text-3xl font-semibold">Let’s Connect</h1>
          <p className="text-cyan-100/80 mt-2">Tell us about your goals. We’ll bring the intelligence.</p>
          <form className="mt-6 grid sm:grid-cols-2 gap-4">
            <input placeholder="Name" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400/50" />
            <input placeholder="Email" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400/50" />
            <input placeholder="Phone" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400/50" />
            <textarea placeholder="Message" rows={4} className="sm:col-span-2 px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400/50" />
            <button className="sm:col-span-2 relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full blur-md opacity-60" />
              <span className="relative bg-cyan-300 text-[#0B0C10] rounded-full px-6 py-3">Send</span>
            </button>
          </form>
        </div>
        <div className="mt-10 text-center text-cyan-100/70">BRIQUE Technology Solutions & Consulting Pvt Ltd · Mumbai, India</div>
      </section>
    </div>
  )
}
