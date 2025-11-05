import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code2, Rocket, Database } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    icon: Rocket,
    description: 'A playful 3D-powered hero with smooth motion and delightful micro-interactions.',
    stack: ['React', 'Spline', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'Data Insights Dashboard',
    icon: Database,
    description: 'Explore metrics, trends, and models in a clean, responsive analytics UI.',
    stack: ['Data Science', 'Charts', 'React'],
    link: '#'
  },
  {
    title: 'Algorithmic Playground',
    icon: Code2,
    description: 'Real-time visualizations for classic algorithms and data structures.',
    stack: ['C++', 'Visualization', 'WebAssembly'],
    link: '#'
  }
];

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 900 }}
      className="group"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md transition-colors hover:border-slate-700"
      >
        {children}
        <div
          style={{ transform: 'translateZ(40px)' }}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/10 to-fuchsia-400/10" />
        </div>
      </motion.div>
    </motion.div>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Highlighted Projects</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            A snapshot of things I loved building. Hover to tilt, click to explore.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <TiltCard key={p.title}>
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-3 text-slate-900 shadow-lg">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-slate-700/80 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a
                  href={p.link}
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  View details →
                </a>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
