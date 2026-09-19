import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StackSummary } from "@/components/home/StackSummary";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ContactCta } from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="bg-background pb-24 text-foreground lg:pb-0">
        <Hero />
        <ServicesSection />
        <FeaturedProjects />
        <ProcessSection />
        <StackSummary />
        <AboutTeaser />
        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
