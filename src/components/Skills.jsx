import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, BookOpen, Star } from 'lucide-react';

const skills = [
  {
    name: 'C++ Programming',
    icon: Cpu,
    level: 90,
    color: 'from-cyan-400 to-blue-500',
    blurb: 'Efficient algorithms, STL mastery, and performance-first design.'
  },
  {
    name: 'React.js',
    icon: Code2,
    level: 85,
    color: 'from-emerald-400 to-teal-500',
    blurb: 'Modern SPA development with hooks, state, and component-driven UIs.'
  },
  {
    name: 'Data Science',
    icon: Database,
    level: 75,
    color: 'from-fuchsia-400 to-pink-500',
    blurb: 'Data wrangling, EDA, and modeling for impactful insights.'
  },
  {
    name: 'Jupyter Notebook',
    icon: BookOpen,
    level: 80,
    color: 'from-amber-400 to-orange-500',
    blurb: 'Interactive analysis, visualization, and reproducible reports.'
  },
  {
    name: 'Coding Fundamentals',
    icon: Star,
    level: 95,
    color: 'from-violet-400 to-purple-500',
    blurb: 'Data structures, algorithms, and problem-solving mindset.'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Core Skills</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            A blend of systems-level thinking and modern frontend craft.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: idx * 0.06, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg backdrop-blur-md"
          >
            <div className="flex items-start gap-4">
              <div className={`rounded-xl bg-gradient-to-br ${s.color} p-3 text-slate-900 shadow-lg shadow-black/10`}>
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{s.blurb}</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                <span>Proficiency</span>
                <span>{s.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
