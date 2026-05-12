import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Steve Brown",
      role: "Very easy to work with",
      content: "There not too much that can go wrong with kit you just keep stirring until the mixture goes completely clear. It is nice to pour, I would describe it as 'goldilocks' not too running and not too thick.",
      rating: 5
    },
    {
      name: "KP",
      role: "Epoxy Resin Kit For Beginners",
      content: "This is a good epoxy resin kit. Very easy 1:1 mix. Has a pot life of about 40 minutes so you can take your time with your work, before leaving it 24 hours to completely cure.",
      rating: 5
    },
    {
      name: "Mike B",
      role: "Comprehensive kit.",
      content: "Nice resin in a kit that gives most of what you need, bar a mould. Easy to mix and cures relatively quickly, bubble free (if done when it's warm) and very clear. Can't fault it and a competitive price too.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-zinc-900 text-white overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary-fixed/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">
            Trusted by <span className="resin-gradient-text">OUR</span> Creators
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            The big Resin brands are great.<br />
            We know - we use the same supplier.<br />
            Skip the Brand tax and get the same quality resin for less.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm relative"
            >
              <Quote className="w-10 h-10 text-primary/40 mb-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-zinc-300 leading-relaxed italic mb-8">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="text-xl font-bold uppercase tracking-tight">{testimonial.name}</h4>
                <p className="text-sm text-primary font-bold uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
