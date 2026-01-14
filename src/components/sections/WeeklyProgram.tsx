import { Button } from "@/components/ui/button";

export const WeeklyProgram = () => {
  const weeks = [{
    number: 1,
    title: "Corps & intuition",
    subtitle: "POSER LES FONDATIONS",
    description: "Reconnecter avec ton corps et ton intuition pour établir les bases solides de ton parcours de réalignement."
  }, {
    number: 2,
    title: "Mission de vie",
    subtitle: "FAIRE ÉMERGER TA VÉRITÉ",
    description: "Découvrir et clarifier ta mission de vie authentique, celle qui résonne vraiment avec qui tu es."
  }, {
    number: 3,
    title: "Mode d'emploi",
    subtitle: "CLARIFIER TON MOTEUR INTÉRIEUR",
    description: "Comprendre ton fonctionnement unique et identifier ce qui te fait vraiment avancer."
  }, {
    number: 4,
    title: "Libération",
    subtitle: "LEVER LES BLOCAGES ET LES FREINS",
    description: "Identifier et dépasser les obstacles qui t'empêchent d'avancer vers ton alignement."
  }, {
    number: 5,
    title: "Alignement en action",
    subtitle: "BÂTIR TON PLAN CONCRET",
    description: "Créer un plan d'action clair et réalisable pour incarner ton alignement au quotidien."
  }, {
    number: 6,
    title: "Intégration",
    subtitle: "INCARNER DURABLEMENT TON ALIGNEMENT",
    description: "Ancrer tous les apprentissages pour maintenir ton alignement dans la durée."
  }];
  return <section className="py-24 bg-gradient-to-b from-accent to-background">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Le programme détaillé module par module    
          </h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {weeks.map(week => <div key={week.number} className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-5xl font-serif text-primary group-hover:scale-110 transition-transform duration-300">
                    {week.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-foreground">
                      {week.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-primary/80 font-medium">
                      {week.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {week.description}
                </p>
              </div>
            </div>)}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-8">
          <Button 
            size="lg" 
            className="w-full md:w-auto bg-white hover:bg-white/90 text-taupe px-8 md:px-12 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium border border-primary/20" 
            asChild
          >
            <a href="#contact">Je commence mon parcours digital dès maintenant pour 49€</a>
          </Button>
        </div>
      </div>
    </section>;
};