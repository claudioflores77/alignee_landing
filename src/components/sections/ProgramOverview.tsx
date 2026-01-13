export const ProgramOverview = () => {
  const outcomes = [
    {
      number: "1",
      title: "Ta mission de vie révélée",
      description: "Tu sauras enfin ce que tu es venue faire sur cette terre et comment l'incarner dans ta vie"
    },
    {
      number: "2",
      title: "Ton mode d'emploi personnel",
      description: "Tu comprendras comment tu fonctionnes et ce qui est non-négociable pour ton bien-être"
    },
    {
      number: "3",
      title: "Ton plan d'action concret",
      description: "Des étapes claires pour passer de « je veux changer » à « je change vraiment »"
    },
    {
      number: "4",
      title: "L'élan pour tenir dans la durée",
      description: "Les outils pour incarner ce changement durablement, pas juste pendant 2 semaines"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-4xl font-serif text-foreground">
            Pour elles, j'ai créé le programme
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-primary">
            ALIGNÉE
          </h3>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            En 6 modules, on met des mots clairs sur ton mal-être<br />
            et on fait émerger ce que tu veux vraiment à la place
          </p>
          <p className="text-base md:text-lg text-primary italic">
            À la fin de ce programme, tu repars avec :
          </p>
        </div>

        {/* 🔥 BENEFICIOS AMPLIADOS CON DESCRIPCIONES */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {outcomes.map((outcome) => (
            <div 
              key={outcome.number} 
              className="bg-accent/30 p-6 md:p-8 rounded-2xl border border-border/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl md:text-4xl font-serif text-primary flex-shrink-0">
                  {outcome.number}
                </span>
                <div className="space-y-2">
                  <p className="text-lg md:text-xl text-foreground font-medium">
                    {outcome.title}
                  </p>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus - NO CAMBIAR */}
        <div className="text-center">
          <div className="inline-block bg-primary/10 px-6 md:px-8 py-3 md:py-4 rounded-full border border-primary/20">
            <p className="text-foreground/80 text-base md:text-lg">
              <span className="text-primary font-medium">+</span> Un livret synthétique qui capte parfaitement l'essence de qui tu es
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
