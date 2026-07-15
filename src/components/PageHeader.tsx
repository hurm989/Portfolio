import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from './AnimatedPage'

type PageHeaderProps = {
  eyebrow: string
  title: string
  lead: string
  className?: string
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  className = '',
}: PageHeaderProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={`mb-10 md:mb-12 ${className}`}
      variants={reduce ? undefined : stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.p
        variants={fadeUp}
        className="text-[0.8rem] font-semibold tracking-[0.18em] text-[var(--blue)] uppercase"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className="font-display mt-2.5 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] font-semibold tracking-[-0.03em]"
      >
        {title}
      </motion.h1>
      <motion.div variants={fadeUp} className="accent-line mt-4" />
      <motion.p
        variants={fadeUp}
        className="mt-4 max-w-xl text-[0.98rem] leading-7 text-[var(--muted)] md:text-base md:leading-7"
      >
        {lead}
      </motion.p>
    </motion.div>
  )
}
