import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial from-primary/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-fixed opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-on-tertiary-fixed"></span>
            </span>
            New Formula v4.0
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 uppercase">
            CRYSTAL CLEAR <br />
            <span className="resin-gradient-text uppercase">PERFECTION.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 max-w-xl mb-10 leading-relaxed">
            Premium, crystal-clear epoxy engineered for artists. Deep pour, UV resistant, and zero VOC. Unleash your creativity with PoxyResin
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#products" 
              className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
            >
              Explore the Shop
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#process" 
              className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg border border-outline-variant hover:bg-surface-container-low transition-all"
            >
              <Play className="w-5 h-5 fill-current" />
              Learn the Process
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[4rem] asymmetric-border-xl overflow-hidden shadow-2xl bg-zinc-100"
        >
          {/* Main Hero Image */}
          <img 
            src="https://i.ibb.co/hFR1HFQ3/ab570936-f208-4a3d-a982-171b3900e796.jpg" 
            alt="PoxyResin Artwork" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating badge */}
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-xl border border-white/20 max-w-[220px]">
            <p className="text-xs font-bold text-primary uppercase tracking-tighter mb-1">Artist Spotlight</p>
            <p className="text-sm font-medium text-zinc-800 italic leading-snug">"There not too much that can go wrong with kit you just keep stirring until the mixture goes completely clear."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

