import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ScrollingGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);
  const images = [
    'https://i.ibb.co/XryLymYz/ed0b44d2-ae6b-4ab9-808a-1e43f79ee7d4.jpg',
    'https://i.ibb.co/Ng4Dsg4s/ec275a88-6429-4ba8-8188-b331e57d2b04.jpg',
    'https://i.ibb.co/bRyCsFYd/1d367a30-ebcf-42e7-b27b-6b3fbd6c5124.jpg',
    'https://i.ibb.co/hFR1HFQ3/ab570936-f208-4a3d-a982-171b3900e796.jpg',
    'https://i.ibb.co/FqmTdJB8/IMG-8510.jpg',
    'https://i.ibb.co/KxM6Rfvg/16b19110-0d42-4dbc-b96d-3171fc0c0494.jpg',
    'https://i.ibb.co/8grSJZdd/5.jpg',
    'https://i.ibb.co/N20xVh60/Poxy-Resin-Epoxy-Resin-Kit-Block-05-1.jpg',
    'https://i.ibb.co/5W5dX0V9/Poxy-Resin-Epoxy-Resin-Kit-4-L-Block-04.jpg',
    'https://i.ibb.co/JjnZmC77/Poxy-Resin-Epoxy-Resin-Kit-1-L-Block-08.jpg',
    'https://i.ibb.co/LDG5QYg0/Poxy-Resin-Epoxy-Resin-Kit-1-L-Block-04.jpg',
    'https://i.ibb.co/2095BkGM/fcf3131b-c5ba-40b7-a04c-6a451053267a.jpg'
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
              className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 cursor-zoom-in"
              onClick={() => setSelectedImage(src)}
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full rounded-[2.5rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                className="max-h-[85vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
