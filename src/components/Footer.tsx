import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface pt-20 pb-10 px-6 md:px-12 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="text-2xl font-extrabold tracking-tighter resin-gradient-text block mb-6">
              POXYRESIN
            </a>
            <p className="text-zinc-500 leading-relaxed max-w-[240px]">
              Crafted for creators. Premium epoxy resins engineered for professional artistic results.
            </p>
          </div>
          
          <div>
            <h5 className="font-black uppercase tracking-widest text-xs mb-6">Explore</h5>
            <ul className="space-y-4">
              <li><a href="#products" className="text-sm text-zinc-600 hover:text-primary transition-colors">Shop All</a></li>
              <li><a href="#features" className="text-sm text-zinc-600 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#process" className="text-sm text-zinc-600 hover:text-primary transition-colors">Safety Guides</a></li>
              <li><a href="#testimonials" className="text-sm text-zinc-600 hover:text-primary transition-colors">Expert Reviews</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black uppercase tracking-widest text-xs mb-6">Company</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-zinc-600 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-zinc-600 hover:text-primary transition-colors">Wholesale</a></li>
              <li><a href="#" className="text-sm text-zinc-600 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-zinc-600 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black uppercase tracking-widest text-xs mb-6">Connect</h5>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-primary hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-primary hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-primary hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-primary hover:text-white transition-all"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="text-sm text-zinc-500">support@poxyresin.com</p>
          </div>
        </div>
        
        <div className="pt-10 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-zinc-400 font-medium uppercase tracking-widest">
            © {currentYear} PoxyResin. Crafted for creators.
          </p>
          <div className="flex gap-8">
            <span className="text-xs text-zinc-300 font-bold uppercase tracking-[0.2em]">Crystal Clear</span>
            <span className="text-xs text-zinc-300 font-bold uppercase tracking-[0.2em]">Bubble Free</span>
            <span className="text-xs text-zinc-300 font-bold uppercase tracking-[0.2em]">UV Proof</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
