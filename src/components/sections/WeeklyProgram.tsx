export const WeeklyProgram = () => {
  const weeks = [
    {
      number: 1,
      title: "Corps & intuition",
      subtitle: "POSER LES FONDATIONS",
      description: "Reconnecter avec ton corps et ton intuition pour établir les bases solides de ton parcours de réalignement."
    },
    {
      number: 2,
      title: "Mission de vie",
      subtitle: "FAIRE ÉMERGER TA VÉRITÉ",
      description: "Découvrir et clarifier ta mission de vie authentique, celle qui résonne vraiment avec qui tu es."
    },
    {
      number: 3,
      title: "Mode d'emploi",
      subtitle: "CLARIFIER TON MOTEUR INTÉRIEUR",
      description: "Comprendre ton fonctionnement unique et identifier ce qui te fait vraiment avancer."
    },
    {
      number: 4,
      title: "Libération",
      subtitle: "LEVER LES BLOCAGES ET LES FREINS",
      description: "Identifier et dépasser les obstacles qui t'empêchent d'avancer vers ton alignement."
    },
    {
      number: 5,
      title: "Alignement en action",
      subtitle: "BÂTIR TON PLAN CONCRET",
      description: "Créer un plan d'action clair et réalisable pour incarner ton alignement au quotidien."
    },
    {
      number: 6,
      title: "Intégration",
      subtitle: "INCARNER DURABLEMENT TON ALIGNEMENT",
      description: "Ancrer tous les apprentissages pour maintenir ton alignement dans la durée."
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent to-background">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Le programme
          </h2>
          <p className="text-muted-foreground italic">
            Clique sur chaque semaine pour découvrir le détail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {weeks.map((week) => (
            <div 
              key={week.number}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
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
            </div>
          ))}
        </div>

        <div className="text-center bg-primary/5 py-12 px-8 rounded-3xl border-2 border-primary/20">
          <p className="text-2xl md:text-3xl font-serif text-primary mb-2">
            3 mois de suivi offerts
          </p>
          <p className="text-foreground/70">
            à la fin de ton programme Alignée
          </p>
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-lg text-foreground/70 italic leading-relaxed">
            Parce que se réaligner, ce n'est pas un instant magique. C'est un chemin qui s'approfondit, s'intègre, et s'ancre dans l'action et dans la durée.
          </p>
        </div>
      </div>
    </section>
  );
};
