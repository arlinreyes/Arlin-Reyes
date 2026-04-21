'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const projects = [
  {
    title: 'Brand Identity System',
    category: 'Design',
    description:
      'Complete visual identity including logo, typography, color palette, and brand guidelines for a tech startup.',
    tags: ['Branding', 'Figma', 'Illustration'],
  },
  {
    title: 'E-Commerce Platform',
    category: 'Development',
    description:
      'Full-stack shopping experience with real-time inventory, payment processing, and analytics dashboard.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Motion Design Reel',
    category: 'Animation',
    description:
      'A curated collection of UI micro-interactions and animated transitions built for web and mobile apps.',
    tags: ['After Effects', 'Framer', 'React'],
  },
  {
    title: 'Design System',
    category: 'Design',
    description:
      'Token-based component library with 60+ accessible components, dark mode support, and full documentation.',
    tags: ['shadcn/ui', 'Storybook', 'Figma'],
  },
];

const skills = [
  { label: 'UI/UX Design', level: 95 },
  { label: 'React & Next.js', level: 90 },
  { label: 'TypeScript', level: 85 },
  { label: 'Motion Design', level: 80 },
  { label: 'Brand Identity', level: 88 },
  { label: 'Tailwind CSS', level: 92 },
];

export default function Home() {
  return (
    <main className='bg-[#0a0a0a] text-white min-h-screen'>
      <ScrollExpandMedia
        mediaType='image'
        mediaSrc='https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1280&auto=format&fit=crop'
        bgImageSrc='https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop'
        title='Arlin Reyes'
        date='Designer & Developer'
        scrollToExpand='Scroll to explore my work'
        textBlend
      >
        {/* About */}
        <section className='max-w-4xl mx-auto mb-24'>
          <p className='text-sm uppercase tracking-widest text-blue-400 mb-4'>
            About
          </p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
            Crafting digital experiences that{' '}
            <span className='text-blue-400'>matter.</span>
          </h2>
          <p className='text-lg text-white/70 leading-relaxed max-w-2xl'>
            I&apos;m a designer and developer passionate about building
            beautiful, functional products. With a focus on clean aesthetics and
            thoughtful interaction, I bring ideas from concept to production.
          </p>
        </section>

        {/* Skills */}
        <section className='max-w-4xl mx-auto mb-24'>
          <p className='text-sm uppercase tracking-widest text-blue-400 mb-8'>
            Skills
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className='flex justify-between mb-2'>
                  <span className='text-white/90 font-medium'>
                    {skill.label}
                  </span>
                  <span className='text-white/40 text-sm'>{skill.level}%</span>
                </div>
                <div className='h-1.5 bg-white/10 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-blue-400 rounded-full'
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className='max-w-4xl mx-auto mb-24'>
          <p className='text-sm uppercase tracking-widest text-blue-400 mb-8'>
            Selected Work
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projects.map((project) => (
              <div
                key={project.title}
                className='group border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 hover:bg-white/5 transition-all duration-300 cursor-pointer'
              >
                <p className='text-xs uppercase tracking-widest text-blue-400 mb-3'>
                  {project.category}
                </p>
                <h3 className='text-xl font-semibold mb-3 group-hover:text-blue-200 transition-colors'>
                  {project.title}
                </h3>
                <p className='text-white/60 text-sm leading-relaxed mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-xs px-3 py-1 rounded-full bg-white/10 text-white/70'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className='max-w-4xl mx-auto pb-16 text-center'>
          <p className='text-sm uppercase tracking-widest text-blue-400 mb-4'>
            Get in touch
          </p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Let&apos;s build something{' '}
            <span className='text-blue-400'>together.</span>
          </h2>
          <p className='text-white/60 mb-8 max-w-md mx-auto'>
            Open to freelance projects, collaborations, and full-time
            opportunities. Don&apos;t hesitate to reach out.
          </p>
          <a
            href='mailto:hello@arlinreyes.com'
            className='inline-block px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition-colors duration-300'
          >
            Say Hello
          </a>
        </section>
      </ScrollExpandMedia>
    </main>
  );
}
