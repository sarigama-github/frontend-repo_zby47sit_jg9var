import { motion } from 'framer-motion';
import { Twitter, Telegram, Instagram, Discord } from 'lucide-react';

export default function FaqFooter() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          FAQ
        </motion.h2>
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-4">
          {[
            { q: 'Is PepeTürk real?', a: 'As real as your favorite kebab.' },
            { q: 'Can I get rich?', a: 'Inshallah.' },
            { q: 'Who’s behind it?', a: 'A movement, not a team.' },
            { q: 'Where can I buy it?', a: 'Where memes and markets meet.' },
          ].map((item, i) => (
            <motion.div key={item.q} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i, duration: 0.4 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-1 text-lg font-semibold">{item.q}</div>
              <p className="text-white/70">{item.a}</p>
            </motion.div>
          ))}
        </div>

        <PriceWidget />

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row">
          <p className="text-white/60">© 2025 PepeTürk — All Rights Reserved • This is not financial advice. Just memes.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Twitter size={18} /></a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Telegram size={18} /></a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Discord size={18} /></a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Instagram size={18} /></a>
          </div>
        </footer>
      </div>
    </section>
  );
}

function PriceWidget() {
  // Dummy sparkline
  const points = Array.from({ length: 36 }, (_, i) => {
    const x = (i / 35) * 300;
    const y = 40 + Math.sin(i / 2.5) * 8 + Math.random() * 6;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-sm text-white/60">$TURK Price (simulated)</div>
          <div className="text-2xl font-bold">$0.00042 <span className="align-middle text-sm text-emerald-400">+12.4%</span></div>
        </div>
        <a href="https://app.uniswap.org/#/swap" target="_blank" rel="noreferrer" className="rounded-full bg-[#3ecf8e] px-4 py-2 font-semibold text-black hover:brightness-110">Buy Now</a>
      </div>
      <svg viewBox="0 0 300 80" className="h-24 w-full">
        <defs>
          <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3ecf8e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00b5ad" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <polyline fill="none" stroke="#3ecf8e" strokeWidth="2" points={points} />
        <polygon points={`0,80 ${points} 300,80`} fill="url(#grad)" />
      </svg>
    </div>
  );
}
