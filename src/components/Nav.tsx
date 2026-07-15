import { motion } from 'framer-motion'
import { navLinks, profile } from '../data/cv'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  const active = useActiveSection()

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--blue)] to-[var(--green)] font-display text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition duration-300 group-hover:scale-105">
            HN
          </span>
          <span className="font-display hidden text-sm font-semibold tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary !px-4 !py-2.5 text-sm">
            Let’s talk
          </a>
        </div>
      </div>
    </motion.header>
  )
}
