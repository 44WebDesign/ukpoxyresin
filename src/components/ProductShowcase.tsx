import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Artist Elite Plus",
      description: "Low-viscosity, high-UV formula for intricate jewelry and detailed casting.",
      price: "16.98",
      tag: "Best Seller",
      image: "https://58webdesign.co.uk/artwork/poxyresin/7.png"
    },
    {
      id: 2,
      name: "Deep Pour Master",
      description: "Extra slow-cure formula for river tables and large-volume flower preservation.",
      price: "34.50",
      tag: "Top Rated",
      image: "https://58webdesign.co.uk/artwork/poxyresin/10.png"
    }
  ];

  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 underline-offset-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 uppercase">
              SHOP THE <span className="resin-gradient-text uppercase">FORMULAS.</span>
            </h2>
            <p className="text-xl text-zinc-600">
              Every project has a perfect match. Find yours among our signature blends.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-zinc-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-black uppercase tracking-widest text-primary shadow-lg">
                  {product.tag}
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black uppercase tracking-tight">{product.name}</h3>
                <span className="text-xl font-bold resin-gradient-text">£{product.price}</span>
              </div>
              <p className="text-zinc-500 leading-relaxed mb-6">{product.description}</p>
              
              <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-zinc-900 text-white font-bold text-lg hover:bg-zinc-800 active:scale-95 transition-all">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
