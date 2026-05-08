import { Facebook, Instagram, ShoppingBag } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Shop', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Guides', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: ShoppingBag, href: '#', label: 'Amazon' },
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
