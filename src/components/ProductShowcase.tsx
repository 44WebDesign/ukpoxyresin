import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "4L Resin Kit",
      description: "Clear Casting Resin With Hardener.",
      price: "59.99",
      tag: "Best Seller",
      image: "https://i.ibb.co/KxM6Rfvg/16b19110-0d42-4dbc-b96d-3171fc0c0494.jpg",
      href: "https://www.amazon.co.uk/Beginners-Bubble-Resistant-Casting-Hardener/dp/B0DNND78T6/ref=cm_cr_arp_d_product_top?ie=UTF8&th=1"
    },
    {
      id: 2,
      name: "2L Resin Kit",
      description: "UV Resistant, 35 Minute Work Time.",
      price: "24.99",
      tag: "Top Rated",
      image: "https://i.ibb.co/2095BkGM/fcf3131b-c5ba-40b7-a04c-6a451053267a.jpg",
      href: "https://www.amazon.co.uk/Beginners-Bubble-Resistant-Casting-Hardener/dp/B0DPLB464Y/ref=sxbs_pa_sp_search_thematic_btf_sspa?content-id=amzn1.sym.a038aee5-065e-4f25-8b5a-583571e2cf5e%3Aamzn1.sym.a038aee5-065e-4f25-8b5a-583571e2cf5e&crid=VZEOKJHPPJD3&cv_ct_cx=epoxy%2Bresin%2B1l&keywords=epoxy%2Bresin%2B1l&pd_rd_i=B0DPLB464Y&pd_rd_r=ca4c8768-cf72-47d6-b0ac-04741da69180&pd_rd_w=kPixQ&pd_rd_wg=9SHHN&pf_rd_p=a038aee5-065e-4f25-8b5a-583571e2cf5e&pf_rd_r=SRGNDJYX7KZZ47WDT8X4&qid=1778237370&s=industrial&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=poxyresin%2B1l%2Cindustrial%2C89&sr=1-1-f69b411d-a7a3-463c-b3ca-202c5f7feb80-spons&aref=vDN047DtCm&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm&th=1"
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
              
              <a 
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-zinc-900 text-white font-bold text-lg hover:bg-zinc-800 active:scale-95 transition-all text-center"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
