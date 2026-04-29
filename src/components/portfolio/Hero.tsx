import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, CheckCircle2 } from "lucide-react";
import Pic from "@/assets/profile pic.png";
import { stats, tools } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[auto] lg:min-h-screen pt-20 xs:pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute -z-10 top-20 -left-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(108,59,255,0.3),transparent_70%)] animate-blob" />
      <div
        className="absolute -z-10 top-40 -right-32 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,255,0.25),transparent_70%)] animate-blob"
        style={{ animationDelay: "4s" }}
      />
      
      <div className="container-px mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-5 sm:space-y-8 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm border-white/10">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent animate-pulse" />
            <span className="text-muted-foreground font-medium">Available for premium design projects</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] sm:leading-[0.95] tracking-tight text-center lg:text-left">
            Crafting 
            <span className="block text-gradient mt-1 sm:mt-2">Digital Excellence</span>
            for SaaS & Brands.
          </h1>

          <p className="text-sm xs:text-base sm:text-xl text-muted-foreground max-w-xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            I'm <span className="text-foreground font-bold underline decoration-accent/30 underline-offset-4">Talal Hassan Khan</span> — 
            a Senior UI/UX Designer dedicated to building high-converting, premium digital products.
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-6 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-brand text-primary-foreground px-6 sm:px-10 py-3 sm:py-5 rounded-full text-sm sm:text-lg font-bold glow-purple transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 glass px-6 sm:px-10 py-3 sm:py-5 rounded-full text-sm sm:text-lg font-bold hover:bg-white/10 transition-all border-white/5 active:scale-95"
            >
              View Portfolio
            </a>
          </div>

          {/* Enhanced stats */}
          <div className="grid grid-cols-3 gap-4 xs:gap-6 sm:gap-10 pt-6 sm:pt-8 border-t border-white/5">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="group cursor-default">
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white group-hover:text-gradient transition-colors">{s.value}</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 sm:mt-2 font-semibold">
                  {s.label.split(' ')[0]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - photo + floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center order-1 lg:order-2"
        >
          {/* Main Glow */}
          <div className="absolute inset-0 bg-gradient-brand rounded-full blur-[80px] sm:blur-[120px] opacity-15 sm:opacity-20 animate-pulse" />

          {/* Image + cards wrapper — overflow hidden on mobile to prevent horizontal scroll */}
          <div className="relative w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[420px] lg:max-w-[500px] mx-auto overflow-visible z-10">
            
            {/* Image container */}
            <div className="relative aspect-[4/5] z-10 group">
              {/* Background geometric shapes */}
              <div className="absolute -inset-3 sm:-inset-4 border border-white/5 rounded-[2.5rem] sm:rounded-[4rem] rotate-3 transition-transform group-hover:rotate-6 duration-700" />
              <div className="absolute -inset-3 sm:-inset-4 border border-white/10 rounded-[2.5rem] sm:rounded-[4rem] -rotate-3 transition-transform group-hover:-rotate-6 duration-700" />
              
              <div className="w-full h-full rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden relative shadow-[0_0_60px_rgba(108,59,255,0.15)] sm:shadow-[0_0_100px_rgba(108,59,255,0.2)]">
                <img 
                  src={Pic} 
                  alt="Talal Hassan Khan" 
                  className="w-full h-full object-cover scale-105 sm:scale-110 transition-transform duration-1000 group-hover:scale-115 sm:group-hover:scale-125" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Bottom Info Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-8 sm:left-8 sm:right-8 glass rounded-xl sm:rounded-3xl p-2.5 sm:p-5 border-white/10 backdrop-blur-2xl shadow-2xl translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <div className="text-xs sm:text-lg font-black tracking-tight truncate">Talal Hassan Khan</div>
                      <div className="text-[8px] sm:text-xs text-accent font-bold uppercase tracking-widest mt-0.5">Senior Designer</div>
                    </div>
                    <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating review card - top left */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-2, 1, -2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 xs:-left-4 sm:-left-16 top-4 xs:top-8 sm:top-16 glass rounded-lg xs:rounded-xl sm:rounded-2xl p-2 sm:p-5 w-[100px] xs:w-[130px] sm:w-56 shadow-2xl z-20 border-white/10 backdrop-blur-3xl"
            >
              <div className="flex items-center gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-4 sm:h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <p className="text-[7px] xs:text-[8px] sm:text-sm text-foreground/90 font-bold leading-snug sm:leading-relaxed italic">
                "Talal is a visionary designer who truly understands SaaS growth."
              </p>
              <div className="flex items-center gap-1 sm:gap-2 mt-1.5 sm:mt-4">
                <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-6 sm:h-6 rounded-full bg-[#1DBF73] flex items-center justify-center text-[5px] xs:text-[6px] sm:text-[9px] font-black text-white">F</div>
                <div className="text-[6px] xs:text-[7px] sm:text-[10px] text-muted-foreground font-black uppercase tracking-wider sm:tracking-widest">Verified Expert</div>
              </div>
            </motion.div>

            {/* Floating testimonial - bottom right */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [1, -1, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-2 xs:-right-4 sm:-right-16 bottom-16 xs:bottom-20 sm:bottom-24 glass rounded-lg xs:rounded-xl sm:rounded-2xl p-2 sm:p-5 w-[110px] xs:w-[140px] sm:w-60 shadow-2xl z-20 border-white/10 backdrop-blur-3xl"
            >
              <div className="flex items-center gap-1 sm:gap-3 mb-1 sm:mb-4">
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-[6px] xs:text-[7px] sm:text-sm font-black shadow-inner shrink-0">
                  DH
                </div>
                <div className="min-w-0">
                  <div className="text-[7px] xs:text-[8px] sm:text-xs font-black text-foreground truncate">Daniel Hayes</div>
                  <div className="text-[5px] xs:text-[6px] sm:text-[10px] text-muted-foreground font-bold leading-none mt-0.5 truncate">Founder @ Opernexa</div>
                </div>
              </div>
              <p className="text-[7px] xs:text-[8px] sm:text-xs text-muted-foreground leading-snug sm:leading-relaxed font-medium">
                "The most seamless redesign experience. Truly world-class work."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Tools Marquee */}
      <div className="mt-10 sm:mt-24 border-y border-white/5 bg-white/[0.02] py-4 sm:py-8 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-4 mx-4 xs:mx-6 sm:mx-12 group cursor-default">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
              <span className="text-[11px] xs:text-sm sm:text-2xl font-display font-black text-muted-foreground/40 group-hover:text-white transition-colors uppercase tracking-wider">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
