import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jayant@example.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s Connect</h2>
        <p className="mt-2 text-slate-300">Open to collaborations, internships, and interesting problems.</p>
      </div>

      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
        <a
          href={`mailto:${email}`}
          className="flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-slate-200 transition hover:border-slate-700 hover:bg-slate-800/60"
        >
          <Mail className="h-5 w-5" /> Email
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-slate-200 transition hover:border-slate-700 hover:bg-slate-800/60"
        >
          <Github className="h-5 w-5" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-slate-200 transition hover:border-slate-700 hover:bg-slate-800/60"
        >
          <Linkedin className="h-5 w-5" /> LinkedIn
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-8 flex max-w-md items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-slate-200"
      >
        <span className="truncate">{email}</span>
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-800/60 px-3 py-1.5 text-sm transition hover:border-slate-600 hover:bg-slate-800"
        >
          <Copy className="h-4 w-4" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </motion.div>

      <p className="mt-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Jayant Singh Patel. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
