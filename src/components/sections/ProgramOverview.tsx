export const ProgramOverview = () => {
  const outcomes = [
    {
      number: "1",
      title: "Une vision claire de ta mission de vie",
    },
    {
      number: "2",
      title: "Ton mode de fonctionnement et tes non négociables",
    },
    {
      number: "3",
      title: "Ton plan d'alignement concret pour te mettre en action",
    },
    {
      number: "4",
      title: "Un élan retrouvé pour incarner durablement ce changement",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Pour elles, j'ai créé le programme
          </h2>
          <h3 className="text-5xl md:text-6xl font-serif text-primary">
            ALIGNÉE
          </h3>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            En 6 semaines, on vient mettre des mots clairs sur ton mal-être et faire émerger ce que tu veux vraiment à la place. Tu repars donc avec :
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {outcomes.map((outcome) => (
            <div 
              key={outcome.number} 
              className="bg-accent/30 p-8 rounded-2xl border border-border/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl font-serif text-primary flex-shrink-0">
                  {outcome.number}
                </span>
                <p className="text-lg text-foreground pt-2">
                  {outcome.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-primary/10 px-8 py-4 rounded-full border border-primary/20">
            <p className="text-foreground/80 text-lg">
              <span className="text-primary font-medium">+</span> Un livret de tous les outils clés qui fonctionnent pour toi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
