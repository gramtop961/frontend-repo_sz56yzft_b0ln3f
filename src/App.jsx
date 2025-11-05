import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4 py-2 backdrop-blur-md">
          <a href="#home" className="text-sm font-semibold tracking-tight text-white">
            Jayant Singh Patel
          </a>
          <nav className="hidden gap-4 sm:flex">
            <a href="#skills" className="text-sm text-slate-300 hover:text-white">Skills</a>
            <a href="#projects" className="text-sm text-slate-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="space-y-2">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
