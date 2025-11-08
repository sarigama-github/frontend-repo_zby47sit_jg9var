import { motion } from 'framer-motion';
import { Telegram, Twitter, Discord, Instagram, Rocket } from 'lucide-react';

const phases = [
  { phase: 'Phase 1', items: ['Launch on DEX', 'Website', 'Socials'] },
  { phase: 'Phase 2', items: ['Meme Contest', 'First CEX Listing'] },
  { phase: 'Phase 3', items: ['PepeTürk NFT Collection'] },
  { phase: 'Phase 4', items: ['“Pepe for Peace” Charity Event'] },
];

export default function RoadmapCommunity() {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Roadmap
          </motion.h2>
          <p className="text-slate-600">From launch to legends — milestones fueled by memes.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {phases.map((p, i) => (
            <motion.div key={p.phase} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i, duration: 0.5 }} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                <Rocket size={16} /> {p.phase}
              </div>
              <ul className="space-y-2 text-slate-700">
                {p.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div id="community" className="mt-20 rounded-3xl border border-slate-200 bg-slate-900 p-10 text-white">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold">Join the Community</h3>
            <p className="text-white/70">One nation under memes.</p>
          </div>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="flex items-center gap-2 rounded-full bg-[#00b5ad] px-5 py-3 font-semibold text-black transition hover:brightness-110"><Telegram size={18} /> Telegram</a>
            <a href="#" className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20"><Twitter size={18} /> X</a>
            <a href="#" className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20"><Discord size={18} /> Discord</a>
            <a href="#" className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20"><Instagram size={18} /> Instagram</a>
          </div>

          <LiveCounters />
        </div>
      </div>
    </section>
  );
}

function LiveCounters() {
  const target = 10000;
  // Simple animated count-up
  const format = (n) => n.toLocaleString();
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Counter label="Community Goal" value={target} suffix=" members" />
      <Counter label="Total Supply" value={1000000000} prefix="" suffix=" $TURK" />
      <Counter label="Holders (live)" value={3765} suffix="+" />
    </motion.div>
  );
}

function Counter({ label, value, prefix = '', suffix = '' }) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 text-center">
      <div className="mb-1 text-sm text-white/60">{label}</div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-extrabold tracking-tight">
        {prefix}
        <AnimatedNumber value={value} />
        {suffix}
      </motion.div>
    </div>
  );
}

function AnimatedNumber({ value, duration = 1.2 }) {
  return (
    <motion.span
      initial={{ number: 0 }}
      whileInView={{ number: value }}
      viewport={{ once: true }}
      transition={{ duration }}
    >
      {Math.round(value).toLocaleString()}
    </motion.span>
  );
}
