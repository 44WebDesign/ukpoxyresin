import { Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Shop', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Guides', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/poxy_resin_uk?igsh=cXBpaTRzNm1xMjl1&utm_source=qr', 
      label: 'Instagram' 
    },
    { 
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.032-1.002 2.324-1.488 3.127 1.115.345 2.296.53 3.518.53 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.639 0 12.017 0z" />
        </svg>
      ), 
      href: 'https://pin.it/2rK7P3iYk', 
      label: 'Pinterest' 
    },
  ];

  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <a href="/" className="block mb-8">
          <img 
            src="https://i.ibb.co/vCH9YQpj/18f04a49-006e-4bef-a585-7dc0d583927c.jpg" 
            alt="POXYRESIN" 
            className="h-24 md:h-32 w-auto object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </a>
        
        <p className="text-zinc-500 leading-relaxed max-w-sm mb-12 text-sm italic">
          "Crafted for the chaotic beauty of the artist's studio. Premium epoxy resins engineered for professional artistic results."
        </p>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-black uppercase tracking-widest text-zinc-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex justify-center gap-6 mb-16">
          {socialLinks.map((social) => (
            <a 
              key={social.label} 
              href={social.href} 
              className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-primary hover:text-white transition-all shadow-sm"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="w-full pt-10 border-t border-outline-variant/20 flex flex-col items-center gap-6">
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.3em]">
            © {currentYear} POXYRESIN. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="text-[9px] text-zinc-300 font-black uppercase tracking-widest">Crystal Clear</span>
            <span className="text-[9px] text-zinc-300 font-black uppercase tracking-widest">Bubble Free</span>
            <span className="text-[9px] text-zinc-300 font-black uppercase tracking-widest">UV Proof</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
