import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="mb-28">
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FunFact />
      <Integration />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
