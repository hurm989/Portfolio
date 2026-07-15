import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { experience } from '../data/cv'

export function ExperiencePage() {
  const [active, setActive] = useState(0)
  const job = experience[active]

  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 pt-14 pb-16 md:px-8 md:pt-16 md:pb-20"
    >
      <div className="blob blob-b left-10 top-20 h-44 w-44 opacity-20" />
      <PageHeader
        eyebrow="Experience"
        title="Roles & momentum"
        lead="Shipping product features, mentoring builders, and growing through full-stack work."
      />

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col gap-2">
          {experience.map((item, i) => (
            <motion.button
              key={`${item.company}-${item.role}`}
              type="button"
              className={`exp-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.99 }}
            >
              <span
                className="text-xs font-semibold tracking-[0.14em] uppercase"
                style={{ color: item.accent }}
              >
                {item.period}
              </span>
              <span className="font-display mt-1 block text-lg font-bold">
                {item.company}
              </span>
              <span className="mt-0.5 block text-sm text-[var(--muted)]">
                {item.role}
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={job.company + job.role}
            className="panel p-7 md:p-10"
            initial={{ opacity: 0, x: 18, filter: 'blur(4px)' }}
            animate={{
              opacity: 1,
              x: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              opacity: 0,
              x: -12,
              filter: 'blur(4px)',
              transition: { duration: 0.22 },
            }}
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] pb-6">
              <div>
                <p className="text-sm text-[var(--muted)]">{job.location}</p>
                <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                  {job.role}
                </h2>
                <p className="mt-1 text-lg text-[var(--muted)]">{job.company}</p>
              </div>
              <span
                className="rounded-full px-3 py-1.5 text-xs font-bold text-white"
                style={{ background: job.accent }}
              >
                {job.period}
              </span>
            </div>

            <ul className="mt-7 space-y-4">
              {job.highlights.map((item, idx) => (
                <motion.li
                  key={item}
                  className="grid grid-cols-[auto_1fr] gap-4 text-base leading-relaxed text-[var(--muted)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.08 + idx * 0.05, duration: 0.35 },
                  }}
                >
                  <span
                    className="font-display text-sm font-bold"
                    style={{ color: job.accent }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}
