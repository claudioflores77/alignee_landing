import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const included = [
    "6 modules complets (vidéos + supports écrits)",
    "Un cadre clair pour avancer en autonomie, sans te perdre",
    "Un rythme à la fois libre et guidé, pour soutenir ton engagement dans la durée"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-accent to-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 text-foreground">
            Prête à commencer ?
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 italic max-w-2xl mx-auto">
            Un investissement dans toi-même qui change tout
          </p>
        </div>

        <div className="bg-card p-6 md:p-12 rounded-3xl border-2 border-primary/20 shadow-xl mb-8 md:mb-12">
          
          {/* 🔥 MOBILE: PRECIO Y URGENCIA ARRIBA */}
          <div className="text-center mb-8 md:mb-12">

            {/* Texte d'accroche */}
            <div className="mb-6">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto">
                Accède dès maintenant au programme ALIGNÉE en version 100% digitale et autonome pour un paiement unique de :
              </p>
            </div>

            {/* Prix final */}
            <div className="mb-6">
              <p className="text-5xl md:text-7xl font-serif text-primary mb-2">49€</p>
            </div>
          </div>

          {/* 🔥 CE QUI EST INCLUS - COMPACTO MÓVIL */}
          <div className="space-y-6 mb-8 md:mb-10">
            <h3 className="text-xl md:text-2xl font-serif text-primary text-center mb-6">
              CE QUI EST INCLUS
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 🔥 POURQUOI CE PRIX */}
          <div className="bg-primary/5 p-4 md:p-6 rounded-2xl mb-6 md:mb-8 text-center">
            <h4 className="text-lg md:text-xl font-serif text-foreground mb-4">Pourquoi ce prix ?</h4>
            <div className="text-sm md:text-base text-foreground/70 leading-relaxed space-y-3">
              <p>ALIGNÉE est un programme en autonomie.<br />
              Son prix a été pensé pour être accessible, juste et cohérent avec sa nature.</p>
              <p>Il n'inclut pas d'accompagnement individuel. Il t'offre un cadre simple, stable et soutenant pour commencer un vrai travail intérieur, dans le respect de ton rythme et de tes ressources.</p>
              <p className="font-medium text-foreground/80">Tu vas enfin retrouver l'alignement dont tu as tant besoin dans ta vie sans te ruiner.</p>
              <p className="italic mt-4">ALIGNÉE est conçu comme un espace sûr, dans lequel tu peux avancer avec douceur et présence et te connecter à la femme vibrante que tu veux incarner.</p>
              <p className="mt-4">Si à tout moment du programme tu ressens le besoin d'être soutenue plus directement, des séances individuelles sont disponibles pour t'accompagner.</p>
              <p>Ces options ne sont jamais obligatoires. Elles sont simplement là, si et quand tu en ressens le besoin et tu retrouveras tous les détails, au bon moment, directement dans le programme ALIGNÉE.</p>
            </div>
          </div>

          {/* 🔥 CTA - FULL WIDTH MÓVIL */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-12 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <a href="#contact">Je commence mon parcours ALIGNÉE pour 49 €</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
