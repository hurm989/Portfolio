import { navLinks } from '../data/cv'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

const short: Record<string, string> = {
  Home: 'Home',
  Work: 'Work',
  Experience: 'Career',
  Skills: 'Skills',
  Contact: 'Ping',
}

export function MobileNav() {
  const active = useActiveSection()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--nav-bg-solid)] backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-1 px-2 py-1">
        <ul className="grid flex-1 grid-cols-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`flex flex-col items-center px-1 py-2.5 text-[0.65rem] font-semibold ${
                  active === link.href
                    ? 'text-[var(--blue)]'
                    : 'text-[var(--muted)]'
                }`}
              >
                {short[link.label] ?? link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  )
}
