import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.25),rgba(2,6,23,0.0))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/60" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 sm:pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-4 py-1.5 text-cyan-200 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-sm">Tech • Portfolio • Interactive</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 text-center font-bold leading-tight tracking-tight text-white drop-shadow-sm text-4xl sm:text-5xl md:text-6xl"
        >
          Jayant Singh Patel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-4 max-w-2xl text-center text-slate-300"
        >
          Crafting performant web experiences, data-driven insights, and playful interfaces. Passionate about C++ programming, React, and the science behind great products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToProjects();
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 font-medium text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
          >
            <Rocket className="h-5 w-5" /> Explore Projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:jayant@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 font-medium text-slate-200 backdrop-blur-md transition hover:border-slate-600 hover:bg-slate-800/60"
          >
            <Mail className="h-5 w-5" /> Contact
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 flex items-center gap-4"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700/80 bg-slate-900/60 p-2 text-slate-300 transition hover:border-slate-600 hover:bg-slate-800/60"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700/80 bg-slate-900/60 p-2 text-slate-300 transition hover:border-slate-600 hover:bg-slate-800/60"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Bottom scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="h-10 w-6 rounded-full border border-slate-600/80 bg-slate-900/60 p-1 backdrop-blur">
            <motion.div
              className="mx-auto h-2 w-2 rounded-full bg-cyan-400"
              animate={{ y: [0, 16, 0], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
