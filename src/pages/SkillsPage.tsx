import { motion, useReducedMotion } from 'framer-motion'
import { Marquee } from '../components/Marquee'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { skillMarquee, skills } from '../data/cv'

export function SkillsPage() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="scroll-mt-24 pb-16 md:pb-20">
      <div className="relative mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-16">
        <div className="blob blob-c right-10 top-16 h-40 w-40 opacity-25" />
        <PageHeader
          eyebrow="Skills"
          title="Stack I love using"
          lead="A practical toolkit for shipping modern web apps — from React interfaces to Stripe checkouts."
        />
      </div>

      <Marquee items={skillMarquee} className="mb-10" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-5 md:grid-cols-2 md:px-8">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.06} className="h-full">
            <div className="panel flex h-full flex-col p-7 md:p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight">
                <span className="text-gradient">{category}</span>
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {items.map((skill, idx) => (
                  <motion.li
                    key={skill}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03, duration: 0.3 }}
                    whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
                  >
                    <span className="skill-pill">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
