import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience, skills, tools, stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-block glass px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-muted-foreground mb-4 sm:mb-5">About me</div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Designer obsessed with <span className="text-gradient">clean, functional</span> products.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-3 sm:mt-5 leading-relaxed">
            With 2+ years designing across SaaS, web and mobile, I turn complex problems into elegant interfaces — and partner closely with developers to ship them.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 mb-10 sm:mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-primary/50 transition"
            >
              <div className="text-xl xs:text-2xl sm:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent" /> Experience
            </h3>
            <div className="relative space-y-6 pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent">
              {experience.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 relative"
                >
                  <div className="absolute -left-[1.85rem] top-6 w-3 h-3 rounded-full bg-gradient-brand glow-purple" />
                  <div className="flex justify-between items-start gap-3 sm:gap-4 flex-wrap">
                    <div>
                      <div className="text-sm sm:text-base font-semibold">{e.role}</div>
                      <div className="text-xs sm:text-sm text-accent">{e.company}</div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground glass px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">{e.period}</div>
                  </div>
                  <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-2"><span className="text-accent">•</span>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills + tools */}
            <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">Skills</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map((s) => (
                  <span key={s} className="glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-white/10 transition cursor-default">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {tools.map((t) => (
                  <div key={t} className="glass rounded-xl p-3 sm:p-4 text-center text-xs sm:text-sm font-medium hover:border-primary/50 hover:-translate-y-1 transition-all">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
