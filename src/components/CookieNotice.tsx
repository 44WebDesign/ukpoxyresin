import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    setIsVisible(false);
    localStorage.setItem('cookie_consent', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:w-[400px] z-[70]"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-outline-variant/30 p-6 rounded-[2rem] shadow-2xl flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-black uppercase tracking-wider mb-1">We use cookies</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  By clicking "Accept", you agree to our use of cookies to enhance your experience and analyze site traffic.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={accept}
                className="flex-1 bg-primary text-white py-2.5 rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/10 transition-all active:scale-95"
              >
                ACCEPT ALL
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="flex-1 border border-outline-variant py-2.5 rounded-xl text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-all"
              >
                MANAGE
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
