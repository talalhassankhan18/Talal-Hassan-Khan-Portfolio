import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="testimonials" className="relative py-14 sm:py-28 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-brand opacity-[0.03] blur-[120px] -z-10" />
      
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent border-white/5">
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1]">
              Trusted by <span className="text-gradient">World-wide</span> Clients.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Don't just take my word for it. Here's what my clients have to say about our partnership.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button 
                onClick={prev}
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass flex items-center justify-center hover:bg-white/10 transition-all active:scale-95 border-white/5 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={next}
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right: Testimonial Card */}
          <div className="lg:col-span-3 relative min-h-[300px] xs:min-h-[350px] sm:min-h-[450px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="w-full glass rounded-2xl sm:rounded-[2.5rem] p-5 xs:p-6 sm:p-12 md:p-16 shadow-2xl border-white/10 relative overflow-hidden group"
              >
                <Quote className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 text-white/[0.03] group-hover:text-accent/[0.05] transition-colors duration-700" />
                
                <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-8">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star 
                      key={k} 
                      className={`w-3.5 h-3.5 sm:w-5 sm:h-5 ${k < t.rating ? "fill-[#FFD700] text-[#FFD700]" : "text-white/10"}`} 
                    />
                  ))}
                </div>

                <blockquote className="text-sm xs:text-base sm:text-2xl md:text-3xl font-medium leading-relaxed mb-6 sm:mb-10 text-foreground/90">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-brand flex items-center justify-center font-black text-sm xs:text-base sm:text-xl text-white shadow-xl rotate-3">
                      {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-accent flex items-center justify-center border-2 sm:border-4 border-background">
                      <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white fill-white" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="font-black text-sm xs:text-base sm:text-xl tracking-tight truncate">{t.name}</div>
                    <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-wider sm:tracking-widest mt-0.5 sm:mt-1 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="truncate">{t.role}</span> <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" /> <span className="truncate">{t.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background card for depth */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 -rotate-2 glass rounded-2xl sm:rounded-[2.5rem] -z-10 opacity-30" />
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-16">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => {
                setDirection(k > index ? 1 : -1);
                setIndex(k);
              }}
              className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${k === index ? "w-8 sm:w-12 bg-accent shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "w-2 sm:w-3 bg-white/10 hover:bg-white/20"}`}
              aria-label={`Go to testimonial ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
