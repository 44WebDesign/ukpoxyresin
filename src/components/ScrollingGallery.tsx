import { motion } from 'motion/react';

export default function ScrollingGallery() {
  const images = [
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1569350736152-78d103f6f966?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&q=80&w=800',
  ];

  // Double the images to create seamless infinite scroll
  const scrollImages = [...images, ...images];

  return (
    <section className="py-12 overflow-hidden bg-white">
      <div className="flex">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 15,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {scrollImages.map((src, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100"
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
