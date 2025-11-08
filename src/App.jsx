import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import RoadmapCommunity from './components/RoadmapCommunity';
import FaqFooter from './components/FaqFooter';

function App() {
  return (
    <div className="font-inter text-slate-900">
      <MetaTags />
      <Hero />
      <About />
      <Tokenomics />
      <RoadmapCommunity />
      <FaqFooter />
    </div>
  );
}

function MetaTags() {
  return (
    <>
      <title>PepeTürk ($TURK) — Meme Coin. Turkish Style. Global Impact.</title>
      <meta name="description" content="PepeTürk is a playful yet sleek Turkish-flavored meme coin. Community-first, culture-infused, built for virality." />
      <meta name="theme-color" content="#00b5ad" />

      {/* OpenGraph */}
      <meta property="og:title" content="PepeTürk ($TURK) — Meme Coin. Turkish Style. Global Impact." />
      <meta property="og:description" content="Community-first meme coin with Turkish vibes, smooth animations and real meme power." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="PepeTürk ($TURK) — Meme Coin. Turkish Style. Global Impact." />
      <meta name="twitter:description" content="A cultural homage to Pepe with a fez and a grin. Join the $TURK movement." />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop" />
    </>
  );
}

export default App;
