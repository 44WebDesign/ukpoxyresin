import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show every time a user visits the page (no localStorage check)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-zinc-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={close}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 transition-colors z-10"
            >
              <X className="w-5 h-5 text-zinc-400" />
            </button>

            <div className="grid md:grid-cols-2 min-h-[400px]">
              <div className="bg-primary p-10 flex flex-col justify-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-radial from-white/20 to-transparent opacity-50" />
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-widest mb-4 mx-auto">
                    <Sparkles className="w-3 h-3" />
                    Special Offer
                  </div>
                  <h4 className="text-5xl font-black mb-2 tracking-tighter">20% OFF</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/80 leading-tight">Your next <br />resin kit</p>
                </div>
              </div>

              <div className="p-10 flex flex-col justify-center">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl font-black tracking-tight mb-4 uppercase">Join the Studio</h2>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                      Enter your email to unlock your exclusive discount code.
                    </p>
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com" 
                        className="w-full px-5 py-3 rounded-xl bg-zinc-100 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-medium"
                        required
                        disabled={isLoading}
                      />
                      <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 disabled:opacity-50"
                      >
                        {isLoading ? 'SUBMITTING...' : 'GET MY CODE'}
                        {!isLoading && <Send className="w-4 h-4" />}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <h2 className="text-3xl font-black tracking-tight mb-4 uppercase">Welcome!</h2>
                    <p className="text-zinc-500 text-sm mb-6">Use this code at checkout to save 20% on your next order:</p>
                    <div className="bg-zinc-100 p-6 rounded-2xl border-2 border-dashed border-primary/30 mb-8">
                      <span className="text-4xl font-black text-primary tracking-widest">20OFF</span>
                    </div>
                    <button 
                      onClick={close}
                      className="text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
