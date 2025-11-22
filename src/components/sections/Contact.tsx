import { Button } from "@/components/ui/button";
import { Mail, Instagram, Calendar } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-accent">
      <div className="container px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            J'ouvre seulement 5 places tous les mois
          </h2>
          
          <p className="text-2xl text-primary font-serif">
            Et je t'offre ta première séance avec moi gratuitement
          </p>

          <div className="bg-card p-10 rounded-3xl border border-border shadow-lg space-y-8">
            <p className="text-xl text-foreground/70">
              CONTACTE-MOI POUR EN SAVOIR PLUS
            </p>

            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/rima.coaching.alignement" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-lg text-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
                @rima.coaching.alignement
              </a>

              <a 
                href="mailto:ondaluz.contact@gmail.com"
                className="flex items-center justify-center gap-3 text-lg text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                ondaluz.contact@gmail.com
              </a>
            </div>

            <div className="pt-6">
              <p className="text-foreground/70 mb-6">
                Et si tu es déjà convaincue, clique ici pour réserver
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://calendly.com/ondaluz-contact/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Réserver ma séance gratuite
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
