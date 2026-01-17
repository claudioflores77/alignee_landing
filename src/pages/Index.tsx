import { Hero } from "@/components/sections/Hero";
import { ForYou } from "@/components/sections/ForYou";
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
      <WeeklyProgram />
      <Testimonials />
      <Pricing />
      <About />
      <Approach />
      <Contact />
      
      <footer className="bg-foreground/5 py-12 text-center">
        <div className="container px-6">
          <p className="text-5xl text-primary mb-4" style={{ fontFamily: 'Cookie, cursive' }}>Alignée</p>
          <p className="text-muted-foreground italic">
            deviens enfin vraiment toi
          </p>
          <div className="text-sm text-muted-foreground mt-8 space-y-3 max-w-2xl mx-auto">
            <p>© 2025 ONDALUZ. Tous droits réservés.</p>
            <p>Responsable du site : Rim EL IDRISSI MOKDAD</p>
            <p>Hébergeur : Lovable Cloud via Lovable (lovable.app)</p>
            <p>Les données collectées via ce site (formulaire, contact) sont utilisées uniquement pour répondre à vos demandes.</p>
            <p>Vous disposez d'un droit d'accès, de rectification et de suppression : contactez-nous au mail ci-dessus.</p>
            <p>Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
