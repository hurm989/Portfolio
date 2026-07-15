import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '../components/AnimatedPage'
import { profile } from '../data/cv'

const links = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    tone: 'hover:border-[var(--cyan)] hover:bg-[rgba(63,208,255,0.12)]',
    labelTone: 'text-[var(--cyan)]',
  },
  {
    label: 'LinkedIn',
    value: '/in/hurmatnaz',
    href: profile.linkedin,
    external: true,
    tone: 'hover:border-[var(--green)] hover:bg-[rgba(20,200,168,0.12)]',
    labelTone: 'text-[var(--green)]',
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    tone: 'hover:border-[var(--blue)] hover:bg-[rgba(47,107,255,0.15)]',
    labelTone: 'text-[rgba(120,160,255,1)]',
  },
]

export function ContactPage() {
  const reduce = useReducedMotion()

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden pb-20 pt-14 md:pb-24 md:pt-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#041018_0%,#0a2340_45%,#0b3d4a_100%)]" />
      <div className="blob blob-a left-10 top-16 h-56 w-56 opacity-40" />
      <div className="blob blob-b right-0 bottom-10 h-64 w-64 opacity-35" />

      <motion.div
        className="relative mx-auto max-w-6xl px-5 text-white md:px-8"
        variants={reduce ? undefined : stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold tracking-[0.2em] text-[var(--cyan)] uppercase"
        >
          Contact
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display mt-3 max-w-3xl text-4xl leading-[1.1] font-bold tracking-tight md:text-6xl"
        >
          Got a project? <span className="text-gradient">Let’s build.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          Open to roles and collaborations where frontend craft, Stripe-ready
          flows, and on-time delivery matter.
        </motion.p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {links.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              variants={fadeUp}
              custom={i}
              whileHover={reduce ? undefined : { y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className={`rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur transition ${item.tone}`}
            >
              <p
                className={`text-xs font-semibold tracking-[0.16em] uppercase ${item.labelTone}`}
              >
                {item.label}
              </p>
              <p className="font-display mt-4 break-all text-xl font-bold md:text-xl">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
