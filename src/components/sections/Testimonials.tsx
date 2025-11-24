export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Superbe expérience - très heureuse d'avoir sauté le pas, d'avoir pu parler librement de ma problématique et d'être ressortie de ce coaching avec des clefs et une vision plus claire. Cette manière d'amener à trouver soit même les réponses à ses questions en guidant la conversation, faire émerger des outils simples mais efficaces pour répondre à ma problématique.",
      author: "Laurie, 33 ans",
      role: "Cadre & Jeune Maman",
    },
    {
      quote: "Les points forts de ce coaching sont la qualité d'écoute, la reformulation et l'intégration des optiques/enjeux/actions applicables à d'autres sujets que ceux posés. La qualité des outils proposés et la formalisation de la démarche. C'est une confirmation de l'intérêt du coaching comme pratique de vie à intégrer.",
      author: "Marion, 51 ans",
      role: "Cadre & Maman",
    },
    {
      quote: "C'est un accompagnement qui permet de sortir de sa zone de confort. De se poser les bonnes questions. Tout ça, dans un cadre bienveillant. [Cela me redonne] Sérénité. Alignement. Envie de progresser professionnellement. Tu sais t'adapter à tes clients. Et tu sais aussi les pousser gentiment en dehors de la zone de confort. ;)",
      author: "N., 45 ans",
      role: "Cadre & Maman",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-primary">
          ALIGNÉE
        </h2>
        <p className="text-xl text-center mb-16 text-foreground/70 italic">
          Dans les mots de celles qui l'ont vécu
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-accent/30 p-8 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-foreground/70 leading-relaxed mb-6 flex-grow italic">
                {testimonial.quote}
              </p>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};