import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const [shouldPlay, setShouldPlay] = useState(false);
  const steps = [
    { title: "Prep Your Canvas", text: "Clean surfaces and prepare your molds for a flawless cast." },
    { title: "Perfect Ratio", text: "Mix 1:1 by volume. Stir slowly for 3 minutes to avoid micro-bubbles." },
    { title: "The Pour", text: "Slowly pour from the center. Watch the self-leveling magic happen." },
    { title: "Final Cure", text: "Let it rest for 24 hours. Enjoy the rock-hard, high-gloss finish." }
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            CRAFTED FOR <span className="resin-gradient-text uppercase">CREATOR CONFIDENCE.</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Our intuitive 4-step process ensures professional results for every artist, from beginners to masters.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-surface-container-low border border-outline-variant/20 hover:border-primary/20 transition-all group"
            >
              <div className="text-6xl font-black text-outline-variant/20 mb-4 group-hover:text-primary transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-zinc-600 leading-relaxed">{step.text}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-outline-variant/30" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setShouldPlay(true)}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border border-outline-variant/30 aspect-video bg-zinc-100"
        >
          <iframe
            src={`https://player.vimeo.com/video/1190579041?title=0&byline=0&portrait=0&badge=0&controls=1${shouldPlay ? '&autoplay=1&muted=1' : ''}`}
            title="PoxyResin Process Video"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
