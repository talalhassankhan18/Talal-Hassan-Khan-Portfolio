import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talal Hassan Khan — UI/UX & SaaS Product Designer" },
      { name: "description", content: "Premium SaaS, web, and mobile product design by Talal Hassan Khan. 50+ projects, 40+ happy clients." },
      { property: "og:title", content: "Talal Hassan Khan — UI/UX & SaaS Product Designer" },
      { property: "og:description", content: "Designing modern SaaS products, websites and mobile apps that help businesses grow." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
