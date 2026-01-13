export const ForYou = () => {
  const points = [
    "Tu sens que tu as passé des années à créer une vie qui ne correspond plus à la femme que tu es aujourd'hui ?",
    "Tu veux maintenir ta stabilité financière et celle de ta famille mais tu sais que ne rien changer, c'est risquer d'aller jusqu'au burn-out ?",
    "Tu sens que tu n'es plus à ta place ? Tu veux changer de vie mais tu ne sais pas quoi faire ni par où commencer ?",
    "Tu veux quitter ton travail et reconstruire quelque chose de plus juste et plus vibrant, mais sans tout foutre en l'air ?",
    "Tu veux apprendre à gagner ta vie depuis un espace où tu te sens également épanouie ?"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-12 md:mb-16 text-foreground">
          Alignée est fait pour toi si :
        </h2>
        
        {/* MANTENER BULLETS ORIGINALES */}
        <ul className="space-y-4 md:space-y-6 mb-12 md:mb-16">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3 md:gap-4 text-base md:text-lg text-foreground/80">
              <span className="text-primary text-xl md:text-2xl flex-shrink-0">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* MANTENER TRANSICIÓN ORIGINAL */}
        <div className="text-center space-y-6 md:space-y-8">
          <h3 className="text-2xl md:text-4xl font-serif text-primary italic px-4">
            Et si je te montrais qu'une voie plus juste et plus alignée avec toi est possible ?
          </h3>
          
        </div>
      </div>
    </section>
  );
};
