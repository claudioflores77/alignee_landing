import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-6 md:space-y-8">
          
          {/* HEADER */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
              Prête à redevenir<br className="md:hidden" /> pleinement toi-même ?
            </h2>
          </div>

          {/* CTA CARD */}
          <div className="bg-card p-6 md:p-10 rounded-3xl border-2 border-primary/20 shadow-lg space-y-6 md:space-y-8">
            
            <div className="space-y-6">
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
            </div>

            {/* ALTERNATIVA SECUNDARIA */}
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
        </div>
      </div>
    </section>
  );
};