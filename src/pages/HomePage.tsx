import { motion, useReducedMotion } from 'framer-motion'
import { Marquee } from '../components/Marquee'
import { fadeUp, scaleIn, stagger } from '../components/AnimatedPage'
import { awards, education, profile, skillMarquee } from '../data/cv'

export function HomePage() {
  const [first, last] = profile.name.split(' ')
  const reduce = useReducedMotion()

  return (
    <section id="home" className="scroll-mt-24">
      <div className="relative overflow-hidden px-5 pt-10 pb-12 md:px-8 md:pt-14 md:pb-16">
        <div className="blob blob-a -left-10 top-10 h-56 w-56 opacity-40" />
        <div className="blob blob-b right-0 top-32 h-64 w-64 opacity-35" />
        <div className="blob blob-c bottom-10 left-1/3 h-48 w-48 opacity-30" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <motion.div
            className="pb-2"
            variants={reduce ? undefined : stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 text-sm font-medium text-[var(--blue)] backdrop-blur"
            >
              <span className="status-dot" />
              {profile.title} · {profile.location}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display mt-6 text-[clamp(3rem,9vw,6.2rem)] leading-[0.95] font-bold tracking-[-0.04em]"
            >
              <span className="block">{first}</span>
              <span className="text-gradient block">{last}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl"
            >
              Hi, I’m Hurmat. Engineer, mentor, and Peak Performer. I care about
              clean UI systems and shipping on time.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-[0.98rem] leading-7 text-[var(--muted)]"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 grid max-w-lg gap-3 sm:grid-cols-2"
            >
              <div className="rounded-2xl bg-[var(--soft-blue)] p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--blue)] uppercase">
                  Based in
                </p>
                <p className="font-display mt-1.5 text-lg font-semibold">
                  {profile.location}
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--soft-green)] p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--green-deep)] uppercase">
                  Focus
                </p>
                <p className="font-display mt-1.5 text-lg font-semibold">
                  Product frontend
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">
                See the work
                <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let’s collaborate
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 lg:pt-4"
            variants={reduce ? undefined : scaleIn}
            initial="hidden"
            animate="show"
          >
            <div className="overflow-hidden rounded-[1.75rem] bg-[var(--deep)] p-7 text-white shadow-[0_24px_60px_rgba(47,107,255,0.18)]">
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--cyan)] uppercase">
                Education
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold">
                {education.school}
              </h2>
              <p className="mt-2 text-white/70">
                {education.degree} · {education.detail}
              </p>
              <p className="mt-1 text-sm text-white/45">{education.period}</p>
            </div>

            <div className="panel p-6 md:p-7">
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--blue)] uppercase">
                Recognition
              </p>
              <ul className="mt-4 space-y-3">
                {awards.map((award) => (
                  <li
                    key={`${award.title}-${award.date}`}
                    className="flex items-baseline justify-between gap-3 border-b border-[var(--line)] pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-semibold">{award.title}</p>
                      <p className="text-sm text-[var(--muted)]">{award.org}</p>
                    </div>
                    <span className="shrink-0 text-sm text-[var(--green-deep)]">
                      {award.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <Marquee items={skillMarquee} />
    </section>
  )
}
