import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Zap, Layers, MousePointer2, ArrowRight, Droplets } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "2 Part Epoxy Resin",
      description: "Easy 1:1 mix resin and hardener. Self-levelling, durable, and beginner-friendly for perfect results every time.",
      icon: Layers,
      href: "#products"
    },
    {
      title: "UV Resistant & Safe",
      description: "Non-toxic, low odour and crystal clear. Cures hard, glossy and yellowing-resistant for long-lasting professional results.",
      icon: ShieldCheck
    },
    {
      title: "Resin Craft Kit",
      description: "All-in-one set for DIY resin art, perfect for gifts, home décor, jewellery and creative hobby projects.",
      icon: Sparkles
    },
    {
      title: "Auto-Leveling",
      description: "A glass-like finish with zero effort every single pour.",
      icon: MousePointer2
    },
    {
      title: "Bubble-Free formula",
      description: "Advanced degasification ensures a clear finish without the need for a pressure pot.",
      icon: Droplets
    },
    {
      title: "High Gloss",
      description: "Superior surface hardness and mirror-like shine that lasts.",
      icon: Zap
    }
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              ENGINEERED FOR <span className="resin-gradient-text uppercase">PERFECTION.</span>
            </h2>
            <p className="text-xl text-zinc-600">
              Crystal Clear Epoxy Resin – Deep pour, bubble-free formula for glass-like clarity. Ideal for art, tables, casting and flower preservation projects.
            </p>
          </div>
          <a href="#products" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all uppercase tracking-widest text-sm">
            View All Specs <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-[2.5rem] border border-outline-variant/30 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">{feature.description}</p>
              {feature.href && (
                <a href={feature.href} className="text-sm font-bold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-widest">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
