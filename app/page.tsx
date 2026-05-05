'use client';

import { motion } from 'framer-motion';

const marqueeItems = [
  'UX Research', 'UI Design', 'Prototyping', 'Design Systems',
  'User Testing', 'Figma', 'React', 'Accessibility',
  'Brand Identity', 'Wireframing', 'Interaction Design', 'Next.js',
];

const works = [
  {
    num: '01',
    title: 'Banking App Redesign',
    type: 'Mobile · UX/UI',
    year: '2025',
    result: '+62% retention',
    desc: 'Reimagined onboarding and core transaction flows for a fintech startup. Discovered critical friction points through user research and solved them with an intuitive, minimal interface.',
    tags: ['User Research', 'iOS Design', 'Figma', 'Usability Testing'],
  },
  {
    num: '02',
    title: 'E-Commerce UX Overhaul',
    type: 'Web · UX/UI',
    year: '2025',
    result: '+34% conversion',
    desc: 'Overhauled checkout and product discovery for a mid-size fashion brand. A/B tested 6 different checkout flows to land on the highest-converting design.',
    tags: ['UX Audit', 'A/B Testing', 'Figma', 'Analytics'],
  },
  {
    num: '03',
    title: 'SaaS Dashboard System',
    type: 'Web · Design System',
    year: '2024',
    result: '80+ components',
    desc: 'Built a token-based design system for a B2B analytics platform. Went from scattered design files to a single source of truth used by 4 product teams.',
    tags: ['Design Tokens', 'Figma', 'Storybook', 'Documentation'],
  },
  {
    num: '04',
    title: 'Healthcare Patient Portal',
    type: 'Web & Mobile · Accessibility',
    year: '2024',
    result: '91% task completion',
    desc: 'Designed an accessible portal for a hospital network. Achieved WCAG 2.1 AA and improved task success rates dramatically for users aged 55+.',
    tags: ['Accessibility', 'WCAG 2.1', 'User Testing', 'Healthcare'],
  },
];

const toolGroups = [
  { cat: 'Design', list: ['Figma', 'Adobe XD', 'Principle', 'Framer', 'Sketch'] },
  { cat: 'Research & Testing', list: ['Maze', 'Hotjar', 'UserTesting', 'Optimal Workshop', 'Lookback'] },
  { cat: 'Development', list: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { cat: 'Process', list: ['Design Thinking', 'Jobs-to-be-Done', 'Agile / Scrum', 'OKRs', 'Atomic Design'] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function Home() {
  return (
    <div className="bg-[#060606] text-white min-h-screen">
      {/* NAV */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6"
      >
        <span className="text-sm font-bold tracking-[0.15em]">AR</span>
        <nav className="hidden md:flex items-center gap-8">
          {['Work', 'About', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="mailto:hello@arlinreyes.com"
          className="text-sm text-white/50 hover:text-white transition-colors duration-200 hidden md:block"
        >
          hello@arlinreyes.com
        </a>
      </motion.header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs tracking-widest uppercase mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Available for freelance
          </motion.div>

          {/* Name reveal */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter leading-[0.88]"
            >
              ARLIN
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter leading-[0.88] text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"
            >
              REYES
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="space-y-3 mb-12"
          >
            <p className="text-sm text-white/40 font-medium tracking-[0.25em] uppercase">
              UX / UI Designer
            </p>
            <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-xl mx-auto">
              I craft digital experiences that feel intuitive,<br className="hidden sm:block" />
              beautiful, and unmistakably human.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-violet-100 transition-colors duration-200"
            >
              View my work
              <span className="group-hover:translate-y-0.5 transition-transform inline-block">↓</span>
            </a>
            <a
              href="mailto:hello@arlinreyes.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/65 hover:text-white hover:border-white/30 font-medium text-sm transition-all duration-200"
            >
              Get in touch ↗
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
          />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-white/[0.05] py-5 overflow-hidden bg-white/[0.01]">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-xs text-white/30 uppercase tracking-[0.2em] shrink-0">
              {item}
              <span className="ml-12 text-violet-500/50">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-8 md:px-16 py-32 md:py-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-violet-400 mb-6">
            About Me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-14 max-w-3xl"
          >
            Design is how I make<br />
            the complex feel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              simple.
            </span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <motion.div variants={fadeUp} className="space-y-5 text-white/55 text-lg leading-relaxed">
              <p>
                I&apos;m a UX/UI designer with 5+ years of experience building products that people
                actually enjoy using. My process starts with people — understanding who they are,
                what they need, and where they get frustrated.
              </p>
              <p>
                I bridge the gap between research insights and pixel-perfect execution,
                collaborating closely with developers, PMs, and stakeholders from kickoff to launch.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
              {[
                { n: '5+', l: 'Years of Experience' },
                { n: '40+', l: 'Projects Delivered' },
                { n: '25+', l: 'Happy Clients' },
                { n: '98%', l: 'Client Satisfaction' },
              ].map((s) => (
                <motion.div
                  key={s.l}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-violet-500/20 transition-colors duration-300"
                >
                  <p className="text-4xl font-bold mb-1">{s.n}</p>
                  <p className="text-sm text-white/40">{s.l}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-white/[0.05] max-w-6xl mx-auto px-8 md:px-16 py-32 md:py-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-violet-400 mb-6">
            Selected Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight">
            Case studies.
          </motion.h2>
        </motion.div>

        <div className="divide-y divide-white/[0.05]">
          {works.map((w, i) => (
            <motion.div
              key={w.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group py-10 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-1.5 shrink-0 md:w-14">
                  <span className="text-xs font-mono text-white/20">{w.num}</span>
                  <span className="text-xs text-white/20">{w.year}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                    <h3 className="text-2xl font-semibold group-hover:text-violet-300 transition-colors duration-200">
                      {w.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-white/25">{w.type}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-2xl">{w.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full border border-white/[0.07] text-white/35"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 md:self-center">
                  <span className="text-xs uppercase tracking-widest text-violet-400/60 group-hover:text-violet-400 transition-colors duration-200">
                    {w.result}
                  </span>
                  <span className="text-white/20 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-200 text-xl leading-none">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/[0.05] max-w-6xl mx-auto px-8 md:px-16 py-32 md:py-40"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-violet-400 mb-6">
            Skills & Tools
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-16">
            My toolkit.
          </motion.h2>
          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {toolGroups.map((g) => (
              <motion.div key={g.cat} variants={fadeUp}>
                <p className="text-xs uppercase tracking-widest text-violet-400 font-medium mb-5">{g.cat}</p>
                <ul className="space-y-3">
                  {g.list.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/[0.05] px-8 md:px-16 py-32 md:py-48 text-center"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-violet-400 mb-6">Get in Touch</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92] mb-8">
            {"LET'S BUILD"}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              SOMETHING
            </span>
            <br />
            GREAT.
          </h2>
          <p className="text-white/45 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Available for freelance projects, full-time roles, and creative collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@arlinreyes.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_60px_rgba(139,92,246,0.5)]"
            >
              hello@arlinreyes.com ↗
            </a>
            <a
              href="https://linkedin.com/in/arlinreyes"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/[0.1] hover:border-white/[0.25] text-white/55 hover:text-white font-medium transition-all duration-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.05] px-8 md:px-16 py-8 flex items-center justify-between">
        <span className="text-sm font-bold tracking-[0.15em]">AR</span>
        <p className="text-sm text-white/25">© 2026 Arlin Reyes</p>
        <p className="text-sm text-white/25 hidden sm:block">UX / UI Designer</p>
      </footer>
    </div>
  );
}
