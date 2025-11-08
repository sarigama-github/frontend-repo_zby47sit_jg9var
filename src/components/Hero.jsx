import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div style={{ y: y1 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <span className="h-3 w-3 animate-ping rounded-full bg-[#00b5ad]" />
          <span className="text-sm font-medium text-white/90">Introducing PepeTürk ($TURK)</span>
        </motion.div>

        <motion.div style={{ y: y1 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 p-2 shadow-lg">
            {/* Logo: Pepe with fez (simplified SVG mark) */}
            <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00b5ad" />
                  <stop offset="100%" stopColor="#3ecf8e" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="30" fill="url(#g)" />
              <path d="M22 34c2 6 18 6 20 0" fill="#0f172a" opacity=".15" />
              <ellipse cx="24" cy="28" rx="4" ry="3" fill="#fff" />
              <ellipse cx="40" cy="28" rx="4" ry="3" fill="#fff" />
              <circle cx="25" cy="28" r="1.5" fill="#0f172a" />
              <circle cx="39" cy="28" r="1.5" fill="#0f172a" />
              <path d="M20 20l8-3 8 3v-7c0-1-8-3-8-3s-8 2-8 3z" fill="#e11d48" />
              <path d="M36 13l4 1" stroke="#fde047" strokeWidth="2" />
              <path d="M24 39c4 3 12 3 16 0" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <motion.h1 style={{ y: y1 }} className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Meme Coin. Turkish Style. Global Impact.
          </motion.h1>
        </motion.div>

        <motion.p style={{ y: y1 }} className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          A playful yet sleek homage to culture, community and memes. Ride the wave with $TURK — engineered for virality, built for vibes.
        </motion.p>

        <motion.div style={{ y: y1 }} className="flex flex-wrap items-center justify-center gap-4">
          <a href="https://app.uniswap.org/#/swap" target="_blank" rel="noreferrer" className="rounded-full bg-[#00b5ad] px-6 py-3 font-semibold text-black transition hover:brightness-110">
            Buy $TURK
          </a>
          <a href="#community" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
            Join the Community
          </a>
        </motion.div>

        {/* Floating coins/crescents */}
        <motion.div style={{ y: y2 }} className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-24 h-6 w-6 animate-bounce rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500/90 shadow-lg" />
          <div className="absolute right-16 top-36 h-4 w-4 animate-bounce rounded-full bg-gradient-to-tr from-yellow-200 to-yellow-400 shadow" />
          <div className="absolute bottom-24 left-1/3 h-8 w-8 animate-spin rounded-full border-2 border-yellow-400/80" />
          <div className="absolute bottom-32 right-24 h-8 w-8 rotate-12 rounded-full border-2 border-yellow-300/80" />
        </motion.div>
      </div>
    </section>
  );
}
