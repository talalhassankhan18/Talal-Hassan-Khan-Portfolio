import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, X, Clock, Briefcase, Target, Lightbulb, TrendingUp } from "lucide-react";
import { projects, type Category, type Project } from "@/data/portfolio";

const filters: ("All" | Category)[] = ["All", "SaaS", "Website", "Mobile", "Redesign"];

export function Work() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [active, setActive] = useState<Project | null>(null);

  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="relative py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(108,59,255,0.25),transparent_70%)]" />
      </div>

      <div className="container-px mx-auto max-w-[1600px]">
        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-block glass px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-muted-foreground mb-4 sm:mb-5">Featured work</div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10">
            Hand-picked <span className="text-gradient">flagship projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
            {featured.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setActive(p)}
                className="group relative cursor-pointer"
              >
                {/* Main Card Container */}
                <div className="relative glass rounded-[2.5rem] overflow-hidden bg-white/[0.02] border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:shadow-elegant group-hover:-translate-y-2">
                  
                  {/* Image Section */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Tags - Now more stylized */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20 shadow-lg flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        {p.category}
                      </div>
                      <div className="bg-gradient-brand px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                        Featured
                      </div>
                    </div>

                    {/* View Details Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-background/20 backdrop-blur-[2px]">
                      <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Separated from image to avoid overlap */}
                  <div className="p-6 sm:p-8 bg-gradient-to-b from-white/[0.03] to-transparent">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight group-hover:text-gradient transition-all duration-300">
                        {p.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium line-clamp-2">
                        {p.description}
                      </p>
                      
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex -space-x-2">
                          {p.tags.slice(0, 3).map((t, idx) => (
                            <div key={idx} className="w-8 h-8 rounded-full border-2 border-background glass flex items-center justify-center text-[8px] font-bold text-muted-foreground bg-white/5">
                              {t[0]}
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-black">
                          {p.tags.length > 3 ? `+${p.tags.length - 3} Technologies` : 'Stack details'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Background Glow */}
                <div className="absolute -inset-4 bg-gradient-brand opacity-0 group-hover:opacity-5 blur-2xl -z-10 transition-opacity duration-500" />
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* All projects with filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-block glass px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-muted-foreground mb-4 sm:mb-5">All work</div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
              Selected <span className="text-gradient">projects</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 glass rounded-full p-1 xs:p-1.5 self-start lg:self-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium transition ${
                  filter === f ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.article
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -8 }}
                onClick={() => setActive(p)}
                className="group glass rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer relative"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-wider sm:tracking-widest text-white shadow-lg flex items-center gap-1 sm:gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {p.category}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-brand flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-gradient transition line-clamp-1">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 line-clamp-2">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl mx-2 xs:mx-4 sm:mx-auto my-4 sm:my-10 glass rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full glass flex items-center justify-center hover:bg-white/10 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image gallery */}
        <div className={`grid ${images.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"} gap-1 bg-gradient-to-br from-primary/30 to-accent/30`}>
          {images.map((img, i) => (
            <div key={i} className="relative aspect-video sm:aspect-[16/10] overflow-hidden">
              <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-contain sm:object-cover" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 md:p-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
            <span className="bg-gradient-brand rounded-full px-3 py-1 text-xs font-semibold">{project.category}</span>
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-muted-foreground">{t}</span>
            ))}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{project.title}</h2>
          <p className="text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-3xl leading-relaxed">{project.caseStudy.overview}</p>

          {/* Meta row */}
          <div className="grid xs:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Role</div>
                <div className="text-xs sm:text-base font-semibold truncate">{project.caseStudy.role}</div>
              </div>
            </div>
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Timeline</div>
                <div className="text-xs sm:text-base font-semibold truncate">{project.caseStudy.timeline}</div>
              </div>
            </div>
          </div>

          {/* Case study sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg">The Challenge</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.caseStudy.challenge}</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg">The Solution</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.caseStudy.solution}</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h3 className="font-bold text-lg">Impact</h3>
            </div>
            <ul className="grid sm:grid-cols-3 gap-3">
              {project.caseStudy.impact.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-accent">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
