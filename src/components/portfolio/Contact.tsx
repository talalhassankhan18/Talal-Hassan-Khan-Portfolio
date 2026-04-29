import { motion } from "framer-motion";
import { Mail, MessageCircle, Globe, MapPin, Send, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,59,255,0.15),transparent_60%)]" />
      </div>
      <div className="container-px mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-block glass px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-muted-foreground mb-4 sm:mb-5">Get in touch</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Let's build something <span className="text-gradient">premium</span>.</h2>
          <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">Have a project in mind? Drop a message — I usually respond within 24 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="mailto:talalhassankhan2003@gmail.com" className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/50 transition group block">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center"><Mail className="w-5 h-5" /></div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium truncate">talalhassankhan2003@gmail.com</div>
              </div>
            </a>
            <a href="https://wa.me/923255664245" target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/50 transition group block">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center"><MessageCircle className="w-5 h-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-medium">+92 325 5664245</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/talalhassankhan/" target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/50 transition block">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center"><LinkIcon className="w-5 h-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="font-medium">/in/talalhassankhan</div>
              </div>
            </a>
            <a href="https://www.behance.net/talalhassankhan" target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/50 transition block">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center"><Globe className="w-5 h-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Behance</div>
                <div className="font-medium">/talalhassankhan</div>
              </div>
            </a>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="font-medium">Islamabad, Pakistan</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="lg:col-span-3 glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 shadow-elegant border-white/5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">Name</label>
                <input
                  id="name"
                  required
                  className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-medium"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">Subject</label>
              <input
                id="subject"
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-medium"
                placeholder="SaaS dashboard design"
              />
            </div>
            <div>
              <label className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none font-medium"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                type="submit"
                className="w-full bg-white/5 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/10 active:scale-95"
              >
                {sent ? "Message sent ✓" : (
                  <>
                    Send Email <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = (document.getElementById("name") as HTMLInputElement).value;
                  const subject = (document.getElementById("subject") as HTMLInputElement).value;
                  const message = (document.getElementById("message") as HTMLTextAreaElement).value;
                  const text = `Hi Talal, I'm ${name}. %0A%0ASubject: ${subject} %0A%0AMessage: ${message}`;
                  window.open(`https://wa.me/923255664245?text=${text}`, "_blank");
                }}
                className="w-full bg-gradient-brand text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 glow-purple hover:scale-[1.02] transition-all active:scale-95 shadow-xl"
              >
                Chat on WhatsApp <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-glass-border py-10 mt-10">
      <div className="container-px mx-auto max-w-[1600px] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-brand flex items-center justify-center font-bold text-primary-foreground text-xs">T</div>
          <span>© {new Date().getFullYear()} Talal Hassan Khan. Crafted with care.</span>
        </div>
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/talalhassankhan/" target="_blank" rel="noreferrer" className="hover:text-foreground transition">LinkedIn</a>
          <a href="https://www.behance.net/talalhassankhan" target="_blank" rel="noreferrer" className="hover:text-foreground transition">Behance</a>
          <a href="mailto:talalhassankhan2003@gmail.com" className="hover:text-foreground transition">Email</a>
        </div>
      </div>
    </footer>
  );
}
