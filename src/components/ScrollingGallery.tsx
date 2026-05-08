import { motion } from 'motion/react';

export default function ScrollingGallery() {
  const images = [
    'https://i.ibb.co/XryLymYz/ed0b44d2-ae6b-4ab9-808a-1e43f79ee7d4.jpg',
    'https://i.ibb.co/Ng4Dsg4s/ec275a88-6429-4ba8-8188-b331e57d2b04.jpg',
    'https://i.ibb.co/bRyCsFYd/1d367a30-ebcf-42e7-b27b-6b3fbd6c5124.jpg',
    'https://i.ibb.co/hFR1HFQ3/ab570936-f208-4a3d-a982-171b3900e796.jpg',
    'https://i.ibb.co/FqmTdJB8/IMG-8510.jpg',
    'https://i.ibb.co/KxM6Rfvg/16b19110-0d42-4dbc-b96d-3171fc0c0494.jpg',
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
            duration: 40,
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
