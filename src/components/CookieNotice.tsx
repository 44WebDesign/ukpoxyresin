import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    setIsVisible(false);
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
  };

  const saveSelected = () => {
    setIsVisible(false);
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
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
            {!isManaging ? (
              <>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-black uppercase tracking-wider mb-1">Privacy Preference</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      We use cookies to enhance your experience and analyze traffic. Choose how you'd like to proceed.
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
                    onClick={() => setIsManaging(true)}
                    className="flex-1 border border-outline-variant py-2.5 rounded-xl text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-all"
                  >
                    MANAGE
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-black uppercase tracking-wider">Cookie Settings</h4>
                  <button 
                    onClick={() => setIsManaging(false)}
                    className="text-[10px] font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest"
                  >
                    Back
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'functional', label: 'Functional', desc: 'Required for site features', essential: true },
                    { id: 'analytics', label: 'Analytics', desc: 'Improving site experience' },
                    { id: 'marketing', label: 'Marketing', desc: 'Personalized offers' }
                  ].map((category) => (
                    <div key={category.id} className="flex justify-between items-center p-3 rounded-2xl bg-zinc-50/50">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-tight">{category.label}</p>
                        <p className="text-[10px] text-zinc-400 font-medium">{category.desc}</p>
                      </div>
                      <button
                        onClick={() => !category.essential && setPreferences(prev => ({ ...prev, [category.id]: !prev[category.id as keyof typeof preferences] }))}
                        className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${preferences[category.id as keyof typeof preferences] ? 'bg-primary' : 'bg-zinc-300'}`}
                      >
                        <motion.div
                          animate={{ x: preferences[category.id as keyof typeof preferences] ? 20 : 2 }}
                          className="absolute top-0.5 left-0 w-4 h-4 rounded-full bg-white shadow-sm"
                        />
                      </button>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={saveSelected}
                  className="w-full bg-primary text-white py-2.5 rounded-xl text-xs font-bold hover:shadow-lg transition-all active:scale-95"
                >
                  SAVE PREFERENCES
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
