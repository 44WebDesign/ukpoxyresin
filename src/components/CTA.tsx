import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Simulate API call
      console.log('Newsletter signup:', email);
    }
  };

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
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join our customers and use PoxyResin to bring your visions to life. Sign up for our newsletter for tips, tricks, and early access to drops.
                </p>
                
                <form className="flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full px-6 py-4 rounded-2xl bg-white text-zinc-900 font-medium focus:ring-4 focus:ring-tertiary-fixed/50 outline-none transition-all shadow-xl"
                    required
                  />
                  <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-all shadow-xl active:scale-95 whitespace-nowrap">
                    Sign Up
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-md rounded-[2rem] p-12 border border-white/20"
              >
                <h3 className="text-3xl font-black text-white uppercase mb-4">You're on the list!</h3>
                <p className="text-white/80">Check your inbox for your 20% discount code and artistic tips.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
