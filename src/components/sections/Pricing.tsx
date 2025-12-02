import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const included = [
    "Une première séance découverte offerte",
    "6 séances individuelles de 1h30-2h (900€ de valeur)",
    "Exercices hebdomadaires dans un dossier à vie",
    "Ton book d'outils personnalisé (20€ de valeur)",
    "Dossier d'outils avec +5h de contenu (100€ de valeur)",
    "3 mois de suivi = 3 sessions de 1h30 (450€ de valeur)",
    "10 séances de coaching au total (1500€ de valeur)",
    "Accès WhatsApp illimité pendant tout l'accompagnement"
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
            {/* Valor real */}
            <div className="mb-6">
              <p className="text-xs md:text-sm text-foreground/60 uppercase tracking-wide mb-2">
                Valeur réelle du programme
              </p>
              <p className="text-2xl md:text-3xl text-muted-foreground line-through mb-2">
                1 720€
              </p>
              <p className="text-xs md:text-sm text-foreground/60 italic mb-4">
                (10 séances + dossier + book personnalisé)
              </p>
            </div>
            
            {/* Precio oferta */}
            <div className="mb-6">
              <p className="text-5xl md:text-7xl font-serif text-primary mb-2">430€</p>
              <p className="text-base md:text-xl text-foreground/70 mb-4">
                Offre de lancement : <strong>-75%</strong> pour les premières participantes
              </p>
            </div>

            {/* 🔥 URGENCIA VISUAL */}
            <div className="bg-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-full inline-block mb-6">
              <p className="text-sm md:text-lg text-primary font-medium">
                ⚡ Plus que 5 places à ce tarif
              </p>
            </div>

            {/* 🔥 VALOR POR SESIÓN */}
            <div className="bg-accent/30 p-4 md:p-6 rounded-2xl max-w-md mx-auto">
              <p className="text-sm md:text-base text-foreground/80">
                Soit seulement <strong className="text-primary text-xl md:text-2xl block mt-1">43€ par séance</strong>
              </p>
              <p className="text-xs text-foreground/60 mt-2">
                (Au lieu de 150€/séance × 10 séances)
              </p>
            </div>
          </div>

          {/* Paiement en 2 fois */}
          <div className="bg-accent/20 p-4 md:p-6 rounded-2xl mb-8 md:mb-12 text-center">
            <h3 className="text-lg md:text-xl font-serif text-foreground mb-3">
              💳 Paiement en 2 fois possible
            </h3>
            <div className="space-y-2 text-sm md:text-base text-foreground/70">
              <p>215€ au début de l'accompagnement</p>
              <p>215€ à mi-parcours</p>
            </div>
            <p className="text-xs md:text-sm text-foreground/60 italic mt-3">
              Pour créer la confiance et revalider ton choix
            </p>
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

          {/* 🔥 GARANTIE/SEGURIDAD */}
          <div className="bg-primary/5 p-4 md:p-6 rounded-2xl mb-6 md:mb-8 text-center">
            <p className="text-sm md:text-base text-foreground/70 italic">
              💚 Ta première séance est offerte et sans engagement.<br />
              Si on ne vibe pas ensemble, aucun problème.
            </p>
          </div>

          {/* 🔥 CTA - FULL WIDTH MÓVIL */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-12 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <a href="#contact">Réserve ta séance découverte gratuite</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
