export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Superbe expérience - très heureuse d'avoir sauté le pas, d'avoir pu parler librement de ma problématique et d'être ressortie de ce coaching avec des clefs et une vision plus claire. Cette manière d'amener à trouver soit même les réponses à ses questions en guidant la conversation, faire émerger des outils simples mais efficaces pour répondre à ma problématique.",
      author: "Laurie, 33 ans",
      role: "Cadre & Jeune Maman",
      rating: 5
    },
    {
      quote: "Les points forts de ce coaching sont la qualité d'écoute, la reformulation et l'intégration des optiques/enjeux/actions applicables à d'autres sujets que ceux posés. La qualité des outils proposés et la formalisation de la démarche. C'est une confirmation de l'intérêt du coaching comme pratique de vie à intégrer.",
      author: "Marion, 51 ans",
      role: "Cadre & Maman",
      rating: 5
    },
    {
      quote: "C'est un accompagnement qui permet de sortir de sa zone de confort. De se poser les bonnes questions. Tout ça, dans un cadre bienveillant. Cet accompagnement m'a permis de retrouver Sérénité. Alignement. et une Envie de progresser professionnellement. Tu sais t'adapter à tes clients. Et tu sais aussi les pousser gentiment en dehors de la zone de confort. ;)",
      author: "N., 45 ans",
      role: "Cadre & Maman",
      rating: 5
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* 🔥 HEADER CON RATING GLOBAL */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm uppercase tracking-wider text-primary/60 mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-5xl font-serif mb-3 text-primary">
            ALIGNÉE
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 italic mb-4">
            Dans les mots de celles qui l'ont vécu
          </p>
          
          {/* 🔥 RATING 5 ESTRELLAS VISIBLE */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-xl md:text-2xl">★</span>
            ))}
            <span className="text-foreground/60 ml-2 text-sm md:text-base">5.0/5 (3 avis)</span>
          </div>
        </div>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-accent/30 p-6 md:p-8 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* 🔥 ESTRELLAS POR TESTIMONIO */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-base md:text-lg">★</span>
                ))}
              </div>
              
              {/* Quote icon */}
              <div className="mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Quote text */}
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-6 flex-grow italic">
                {testimonial.quote}
              </p>
              
              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-medium text-foreground text-sm md:text-base">
                  {testimonial.author}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 SOCIAL PROOF ADICIONAL */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm md:text-base text-foreground/60 italic">
            + plusieurs femmes m'ont déjà fait confiance et sont ressorties<br className="hidden md:block" />
            avec des résultats incroyablement touchants
          </p>
        </div>
      </div>
    </section>
  );
};
