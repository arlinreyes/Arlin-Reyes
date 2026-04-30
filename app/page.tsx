'use client';

import { motion } from 'framer-motion';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Delivered' },
  { value: '25+', label: 'Happy Clients' },
  { value: '100%', label: 'Dedicated to Craft' },
];

const services = [
  {
    num: '01',
    title: 'UX Research & Strategy',
    body: 'User interviews, competitive analysis, and data-driven insights that shape the foundations of every design decision.',
  },
  {
    num: '02',
    title: 'UI Design & Prototyping',
    body: 'Pixel-perfect visual design with interactive prototypes that communicate ideas before a single line of code is written.',
  },
  {
    num: '03',
    title: 'Design Systems',
    body: 'Scalable component libraries and design tokens that keep teams consistent, aligned, and shipping fast.',
  },
];

const projects = [
  {
    num: '01',
    title: 'Banking App Redesign',
    category: 'Mobile · UX/UI',
    desc: 'Reimagined the onboarding and core transaction flows for a fintech app, reducing user drop-off by 62% through iterative usability testing.',
    tags: ['User Research', 'Figma', 'iOS Design', 'Prototyping'],
  },
  {
    num: '02',
    title: 'E-Commerce Overhaul',
    category: 'Web · UX/UI',
    desc: 'Redesigned the checkout flow and product discovery for a fashion retailer, increasing conversion rate by 34% and average order value by 28%.',
    tags: ['UX Audit', 'A/B Testing', 'Figma', 'Responsive Design'],
  },
  {
    num: '03',
    title: 'SaaS Dashboard System',
    category: 'Web · Design System',
    desc: 'Built a comprehensive design system with 80+ components for a B2B analytics platform, cutting design-to-dev handoff time by half.',
    tags: ['Design Tokens', 'Storybook', 'Figma', 'React'],
  },
  {
    num: '04',
    title: 'Healthcare Patient Portal',
    category: 'Web & Mobile · Accessibility',
    desc: 'Designed an inclusive patient portal meeting WCAG 2.1 AA standards, improving task completion rates from 48% to 91%.',
    tags: ['Accessibility', 'WCAG 2.1', 'User Testing', 'Healthcare UX'],
  },
];

const skillGroups = [
  { category: 'Design Tools', items: ['Figma', 'Adobe XD', 'Principle', 'Framer', 'Sketch'] },
  { category: 'Research', items: ['User Interviews', 'Usability Testing', 'Heuristic Analysis', 'Maze', 'Hotjar'] },
  { category: 'Development', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'] },
  { category: 'Strategy', items: ['Information Architecture', 'Journey Mapping', 'Design Thinking', 'Agile', 'OKRs'] },
];

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function SectionLabel({ text }: { text: string }) {
  return (
    <motion.p
      variants={fade}
      className="text-xs tracking-[0.28em] uppercase text-violet-400 font-medium mb-4"
    >
      {text}
    </motion.p>
  );
}

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Floating Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-5 py-2.5 rounded-full bg-white/[0.06] backdrop-blur-2xl border border-white/[0.08]"
      >
        <span className="text-sm font-bold tracking-[0.12em] text-white">AR</span>
        <div className="hidden sm:flex gap-5">
          {['Work', 'About', 'Skills', 'Contact'].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="mailto:hello@arlinreyes.com"
          className="text-xs px-4 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors duration-200"
        >
          Hire me
        </a>
      </motion.nav>

      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1280&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1920&auto=format&fit=crop"
        title="Arlin Reyes"
        date="UX / UI Designer"
        scrollToExpand="Scroll to explore"
        textBlend
      >
        <div className="max-w-5xl mx-auto w-full space-y-40 pb-24">
          {/* ABOUT */}
          <motion.section
            id="about"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionLabel text="About Me" />
            <motion.h2
              variants={fade}
              className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              I design digital<br />
              products that feel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                human.
              </span>
            </motion.h2>
            <motion.p
              variants={fade}
              className="text-lg md:text-xl text-white/55 leading-relaxed max-w-2xl mb-16"
            >
              I&apos;m a UX/UI designer who obsesses over the details that matter — the ones users feel
              but rarely notice. From discovery and research through high-fidelity delivery, I bring a
              thoughtful, systematic approach that balances beauty with function.
            </motion.p>
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fade}
                  className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-violet-500/25 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <p className="text-4xl font-bold mb-1">{s.value}</p>
                  <p className="text-sm text-white/45">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* SERVICES */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionLabel text="What I Do" />
            <motion.h2
              variants={fade}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-14"
            >
              End-to-end design expertise.
            </motion.h2>
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-5">
              {services.map((s) => (
                <motion.div
                  key={s.num}
                  variants={fade}
                  className="group relative p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-violet-500/25 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute -top-3 -right-1 text-8xl font-black text-white/[0.025] select-none group-hover:text-violet-500/[0.07] transition-colors duration-300 leading-none">
                    {s.num}
                  </div>
                  <p className="text-xs tracking-widest uppercase text-violet-400/80 mb-5">{s.num}</p>
                  <h3 className="font-semibold mb-3 group-hover:text-violet-200 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* WORK */}
          <motion.section
            id="work"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionLabel text="Selected Work" />
            <motion.h2
              variants={fade}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-14"
            >
              Case studies.
            </motion.h2>
            <div className="space-y-3">
              {projects.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-6 p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.13] transition-all duration-300 cursor-pointer"
                >
                  <span className="text-xs font-mono text-white/20 mt-0.5 w-6 shrink-0">{p.num}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-violet-300 transition-colors">
                        {p.title}
                      </h3>
                      <span className="text-xs uppercase tracking-widest text-white/30">{p.category}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full border border-white/[0.08] text-white/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-white/20 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-200 shrink-0 self-center text-lg leading-none">
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* SKILLS */}
          <motion.section
            id="skills"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionLabel text="Skills & Tools" />
            <motion.h2
              variants={fade}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-14"
            >
              My toolkit.
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {skillGroups.map((g) => (
                <motion.div key={g.category} variants={fade}>
                  <p className="text-xs uppercase tracking-widest text-violet-400 font-medium mb-4">
                    {g.category}
                  </p>
                  <ul className="space-y-2.5">
                    {g.items.map((skill) => (
                      <li key={skill} className="flex items-center gap-2.5 text-sm text-white/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* CONTACT */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-3xl border border-white/[0.07] bg-white/[0.02] px-10 py-20 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.08] via-transparent to-cyan-500/[0.05] rounded-3xl" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <p className="text-xs tracking-[0.28em] uppercase text-violet-400 font-medium mb-4">
                  Get in Touch
                </p>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                  Got a project?<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                    Let&apos;s talk.
                  </span>
                </h2>
                <p className="text-white/50 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  Open to freelance work, collaborations, and full-time opportunities. I&apos;d love to hear
                  about what you&apos;re building.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:hello@arlinreyes.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
                  >
                    Say Hello ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/arlinreyes"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/[0.1] hover:border-white/[0.22] text-white/65 hover:text-white font-medium transition-all duration-300"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm text-white/25">© 2026 Arlin Reyes · Designed with care.</p>
          </motion.footer>
        </div>
      </ScrollExpandMedia>
    </main>
  );
}
