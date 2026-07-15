import { ThemeProvider } from '../hooks/ThemeContext'
import { Nav } from './Nav'
import { MobileNav } from './MobileNav'
import { HomePage } from '../pages/HomePage'
import { WorkPage } from '../pages/WorkPage'
import { ExperiencePage } from '../pages/ExperiencePage'
import { SkillsPage } from '../pages/SkillsPage'
import { ContactPage } from '../pages/ContactPage'
import { profile } from '../data/cv'

export function Layout() {
  return (
    <ThemeProvider>
      <div className="atmosphere relative min-h-svh">
        <Nav />
        <main className="pb-16 lg:pb-0">
          <HomePage />
          <WorkPage />
          <ExperiencePage />
          <SkillsPage />
          <ContactPage />
        </main>
        <footer className="border-t border-[var(--line)] px-5 py-8 pb-24 text-sm text-[var(--muted)] md:px-8 lg:pb-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p>Software Engineer · Karachi</p>
          </div>
        </footer>
        <MobileNav />
      </div>
    </ThemeProvider>
  )
}
