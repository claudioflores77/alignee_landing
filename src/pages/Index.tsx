import { Hero } from "@/components/sections/Hero";
import { ForYou } from "@/components/sections/ForYou";
import { ProgramOverview } from "@/components/sections/ProgramOverview";
import { WeeklyProgram } from "@/components/sections/WeeklyProgram";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ForYou />
      <ProgramOverview />
      <WeeklyProgram />
      <About />
      <Approach />
      <Testimonials />
      <Pricing />
      <Contact />
      
      <footer className="bg-foreground/5 py-12 text-center">
        <div className="container px-6">
          <p className="text-5xl font-serif text-primary mb-4">ALIGNÉE</p>
          <p className="text-muted-foreground italic">
            deviens enfin vraiment toi
          </p>
          <p className="text-sm text-muted-foreground mt-8">
            © 2025 ONDALUZ · Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
