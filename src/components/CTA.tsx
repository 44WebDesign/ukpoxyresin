import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function CTA() {
  return (
    <section id="signup" className="py-24 px-6 md:px-12 bg-[#b40065] relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/30 rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[0.9] mb-8 uppercase">
            Ready to pour your <br />
            <span className="text-tertiary-fixed">masterpiece?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 50,000+ creators using PoxyResin to bring their visions to life. Sign up for our newsletter for tips, tricks, and early access to drops.
          </p>
          
          <form className="flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-6 py-4 rounded-2xl bg-white text-zinc-900 font-medium focus:ring-4 focus:ring-tertiary-fixed/50 outline-none transition-all shadow-xl"
            />
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-all shadow-xl active:scale-95">
              Sign Up
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
