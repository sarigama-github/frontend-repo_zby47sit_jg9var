import { motion } from 'framer-motion';

const data = [
  { label: 'Community', value: 40, color: '#3ecf8e' },
  { label: 'Liquidity', value: 25, color: '#00b5ad' },
  { label: 'Marketing', value: 20, color: '#10b981' },
  { label: 'Treasury', value: 10, color: '#34d399' },
  { label: 'Team', value: 5, color: '#059669' },
];

function getSegments(d) {
  const total = d.reduce((a, b) => a + b.value, 0);
  let cumulative = 0;
  return d.map((item) => {
    const start = cumulative / total;
    cumulative += item.value;
    const end = cumulative / total;
    return { ...item, start, end };
  });
}

const segments = getSegments(data);

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative w-full bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Tokenomics
        </motion.h2>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto h-64 w-64">
            <svg viewBox="0 0 32 32" className="h-64 w-64">
              <circle cx="16" cy="16" r="14" fill="#0b1220" />
              {segments.map((s, i) => {
                const startAngle = s.start * 2 * Math.PI - Math.PI / 2;
                const endAngle = s.end * 2 * Math.PI - Math.PI / 2;
                const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
                const x1 = 16 + 14 * Math.cos(startAngle);
                const y1 = 16 + 14 * Math.sin(startAngle);
                const x2 = 16 + 14 * Math.cos(endAngle);
                const y2 = 16 + 14 * Math.sin(endAngle);
                const d = `M16 16 L ${x1} ${y1} A 14 14 0 ${largeArc} 1 ${x2} ${y2} Z`;
                return (
                  <motion.path
                    key={s.label}
                    d={d}
                    fill={s.color}
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                  />
                );
              })}
              <circle cx="16" cy="16" r="8" fill="white" />
              <text x="16" y="16" dominantBaseline="middle" textAnchor="middle" className="fill-slate-900 text-sm font-bold">
                1B $TURK
              </text>
            </svg>
          </div>

          <div>
            <ul className="space-y-3">
              {data.map((item) => (
                <li key={item.label} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-semibold text-slate-800">{item.label}</span>
                  </div>
                  <span className="text-slate-600">{item.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
