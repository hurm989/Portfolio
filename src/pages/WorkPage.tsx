import { motion, useReducedMotion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/cv'

export function WorkPage() {
  const reduce = useReducedMotion()

  return (
    <section
      id="work"
      className="work-page relative mx-auto w-full max-w-5xl scroll-mt-24 px-[var(--space-section-x)] pt-14 pb-16 md:pt-16 md:pb-20"
    >
      <div className="blob blob-a right-0 top-8 h-36 w-36 opacity-20" />

      <PageHeader
        eyebrow="Work"
        title="Projects that shipped"
        lead="Live products with measurable impact - payments, portals, and polished company sites."
        className="mb-8 md:mb-10"
      />

      <div className="border-t border-[rgba(47,107,255,0.12)]">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <motion.article
              className="group relative grid grid-cols-1 gap-x-8 gap-y-4 border-b border-[rgba(47,107,255,0.12)] py-8 pl-0 sm:grid-cols-[3.25rem_minmax(0,1fr)] md:grid-cols-[3.5rem_minmax(0,1fr)_6.5rem] md:gap-x-10 md:py-9 md:pl-5"
              whileHover={reduce ? undefined : { x: 3 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            >
              <div
                className="absolute top-8 bottom-8 left-0 hidden w-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block"
                style={{ background: project.accent }}
                aria-hidden
              />

              <p
                className="font-display pt-0.5 text-[0.75rem] font-semibold tracking-[0.16em] uppercase"
                style={{ color: project.accent }}
              >
                0{i + 1}
              </p>

              <div className="min-w-0 space-y-4 md:pr-4">
                <div className="space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
                    <h2 className="font-display text-[1.45rem] leading-snug font-semibold tracking-[-0.02em] md:text-[1.7rem]">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[var(--blue)]"
                      >
                        {project.name}
                      </a>
                    </h2>
                    <span className="text-[0.85rem] leading-none text-[var(--muted)]">
                      {project.short}
                    </span>
                  </div>

                  <p className="max-w-2xl text-[0.95rem] leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>

                <ul className="max-w-2xl space-y-2.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[0.9rem] leading-6 text-[var(--muted)]"
                    >
                      <span
                        className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full"
                        style={{ background: project.accent }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-x-3.5 gap-y-1.5 pt-0.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-[0.7rem] font-medium tracking-[0.1em] text-[var(--blue-deep)] uppercase"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 pt-1 text-[0.9rem] font-semibold text-[var(--blue)] transition-[gap] group-hover:gap-3"
                >
                  Visit live site
                  <span aria-hidden>↗</span>
                </a>
              </div>

              <div className="flex items-start gap-3 sm:col-start-2 md:col-start-auto md:flex-col md:items-end md:gap-1 md:pt-0.5">
                {/* <p
                  className="font-display text-[1.75rem] leading-none font-semibold tracking-[-0.03em] md:text-[2rem]"
                  style={{ color: project.accent }}
                >
                  {project.metric}
                </p>
                <p className="max-w-[7.5rem] text-[0.68rem] leading-4 tracking-[0.1em] text-[var(--muted)] uppercase md:text-right">
                  {project.metricLabel}
                </p> */}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
