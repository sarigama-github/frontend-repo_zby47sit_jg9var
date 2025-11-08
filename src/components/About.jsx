import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-6 text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          What is PepeTürk?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
          PepeTürk isn’t just a coin — it’s a movement. Born from Turkish humor, community pride, and meme power. A cultural homage to Pepe, styled with a fez and a grin, ready to travel the world.
        </motion.p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Culture-Infused',
              text: 'A playful blend of Turkish motifs, crescent sparks and community energy.',
            },
            {
              title: 'Community-First',
              text: 'Shaped by holders, fueled by memes — decisions driven by vibes.',
            },
            {
              title: 'Built to Share',
              text: 'Crafted for virality with crisp visuals, fast site, and social-ready previews.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-2 text-xl font-bold text-slate-900">{card.title}</h3>
              <p className="text-slate-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
