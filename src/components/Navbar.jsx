import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-cyan-500/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-teal-500 shadow-[0_0_30px_#00FFFF55]" />
            <div className="leading-tight">
              <p className="text-cyan-300 font-semibold tracking-wider">BRIQUE</p>
              <p className="text-[10px] text-cyan-100/70">Technology Solutions</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `relative text-sm tracking-wide transition-colors hover:text-cyan-300 ${isActive ? 'text-cyan-300' : 'text-cyan-100/80'}`}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <motion.span
                      layoutId="active-underline"
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-cyan-400 ${isActive ? 'w-full shadow-[0_0_20px_#00FFFF88]' : 'w-0'}`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <button className="md:hidden p-2 rounded-md border border-white/10 text-cyan-100" onClick={() => setOpen((v) => !v)}>
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => `px-2 py-2 rounded-md transition-colors ${isActive ? 'text-cyan-300 bg-white/5' : 'text-cyan-100/80 hover:text-cyan-300 hover:bg-white/5'}`}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
