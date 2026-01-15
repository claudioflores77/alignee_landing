import { Button } from "@/components/ui/button";
import { Mail, Instagram, Calendar, Check } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-6 md:space-y-8">
          
          {/* 🔥 HEADER OPTIMIZADO */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-xs md:text-sm uppercase tracking-wider text-primary/60">
              Places limitées
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
              Prête à redevenir<br className="md:hidden" /> pleinement toi-même ?
            </h2>
            
            <p className="text-xl md:text-2xl text-primary font-serif">
              Ta première séance est offerte
            </p>

            {/* 🔥 URGENCIA VISIBLE */}
            <div className="inline-block bg-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-full">
              <p className="text-sm md:text-base text-foreground/80">
                ⚡ Seulement <strong className="text-primary">5 places par mois</strong>
              </p>
            </div>
          </div>

          {/* 🔥 CTA CARD - FOCUS ÚNICO */}
          <div className="bg-card p-6 md:p-10 rounded-3xl border-2 border-primary/20 shadow-lg space-y-6 md:space-y-8">
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/80 font-medium">
                Choisis ton créneau maintenant
              </p>
              
              {/* 🔥 BOTÓN PRINCIPAL - FULL WIDTH MÓVIL */}
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://buy.stripe.com/28EaEY7NHaC0b0e1cKejK00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Je commence mon parcours ALIGNÉE pour 49 €
                </a>
              </Button>

              {/* 🔥 BENEFICIOS COMPACTOS */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center text-sm text-foreground/60">
                <span className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  30 minutes offertes
                </span>
                <span className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Sans engagement
                </span>
                <span className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Réponse sous 24h
                </span>
              </div>
            </div>

            {/* 🔥 ALTERNATIVA SECUNDARIA - DISCRETA Y COLAPSABLE */}
            <details className="pt-6 border-t border-border/50">
              <summary className="text-sm text-foreground/60 cursor-pointer text-center hover:text-primary transition-colors">
                Tu préfères me contacter d'abord ?
              </summary>
              
              <div className="mt-4 space-y-3 text-sm">
                <a 
                  href="https://www.instagram.com/rima.coaching.alignement" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-foreground/70 hover:text-primary transition-colors py-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@rima.coaching.alignement</span>
                </a>

                <a 
                  href="mailto:ondaluz.contact@gmail.com"
                  className="flex items-center justify-center gap-2 text-foreground/70 hover:text-primary transition-colors py-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>ondaluz.contact@gmail.com</span>
                </a>
              </div>
            </details>
          </div>

          {/* 🔥 RASSURANCE FINAL */}
          <p className="text-xs md:text-sm text-foreground/60 italic max-w-2xl mx-auto px-4">
            💬 Pendant cette première séance, on parle de ta situation, on voit si le programme est fait pour toi, et tu décides ensuite. Zéro pression.
          </p>
        </div>
      </div>
    </section>
  );
};
