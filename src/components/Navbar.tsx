import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Shop', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Guides', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Delay slightly to let the menu exit animation start
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-20 z-50 glass-nav border-b border-outline-variant/20 px-4 flex items-center justify-between flex-nowrap">
        <a href="/" className="text-xl font-extrabold tracking-tighter resin-gradient-text shrink-0 mr-4">
          POXYRESIN
        </a>
        
        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={() => {
              console.log('Toggling mobile menu');
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="md:hidden flex items-center gap-2 px-4 py-2 text-white bg-zinc-900 rounded-full active:scale-95 shadow-lg shrink-0"
            aria-label="Toggle mobile menu"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">Menu</span>
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <div className="hidden md:flex items-center gap-8 mr-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#signup" 
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-32 px-10 flex flex-col items-center text-center"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-4xl font-black uppercase tracking-tight text-zinc-900 active:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#signup" 
                onClick={(e) => handleLinkClick(e, '#signup')}
                className="mt-6 bg-primary text-white px-10 py-5 rounded-3xl font-black text-xl shadow-2xl shadow-primary/20"
              >
                CONTACT US
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
