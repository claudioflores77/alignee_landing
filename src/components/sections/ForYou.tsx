import { Button } from "@/components/ui/button";

export const ForYou = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-accent">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-8 md:mb-12 text-foreground">
          ALIGNÉE est fait pour toi si :
        </h2>
        
        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
          <div className="flex items-start gap-3 md:gap-4 text-base md:text-lg text-foreground/80">
            <span className="text-primary text-xl md:text-2xl flex-shrink-0">✓</span>
            <span>Tu sens que tu as passé des années à créer une vie qui ne correspond plus à la femme que tu es aujourd'hui.</span>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4 text-base md:text-lg text-foreground/80">
            <span className="text-primary text-xl md:text-2xl flex-shrink-0">✓</span>
            <span>Tu veux maintenir ta stabilité financière mais tu sais que ne rien changer, c'est risquer d'aller jusqu'au burn-out.</span>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4 text-base md:text-lg text-foreground/80">
            <span className="text-primary text-xl md:text-2xl flex-shrink-0">✓</span>
            <span>Tu sens que tu n'es plus à ta place, tu veux changer de vie, quitter ton travail et reconstruire quelque chose de plus juste et plus vibrant, sans tout foutre en l'air, mais tu ne sais pas quoi faire ni par où commencer ?</span>
          </div>
        </div>
      </div>
    </section>
  );
};