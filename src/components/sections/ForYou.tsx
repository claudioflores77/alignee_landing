export const ForYou = () => {
  const points = ["Tu sens que tu as passé des années à créer une vie qui ne correspond plus à la femme que tu es aujourd'hui ?", "Tu veux maintenir ta stabilité financière et celle de ta famille mais tu sais que ne rien changer, c'est risquer d'aller jusqu'au burn-out ?", "Tu sens que tu n'es plus à ta place ? Tu veux changer de vie mais tu ne sais pas quoi faire ni par où commencer ?", "Tu veux quitter ton travail et reconstruire quelque chose de plus juste et plus vibrant, mais sans tout foutre en l'air ?", "Tu veux apprendre à gagner ta vie depuis un espace où tu te sens également épanouie ?"];
  return <section className="py-24 bg-gradient-to-b from-background to-accent">
      <div className="container px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-foreground">
          Alignée est fait pour toi si :
        </h2>
        
        <ul className="space-y-6 mb-16">
          {points.map((point, index) => <li key={index} className="flex items-start gap-4 text-lg text-foreground/80">
              <span className="text-primary text-2xl flex-shrink-0">•</span>
              <span>{point}</span>
            </li>)}
        </ul>

        <div className="text-center space-y-8">
          <h3 className="text-3xl md:text-4xl font-serif text-primary italic">
            Et si je te montrais qu'une voie plus juste et plus alignée avec toi est possible ?
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed">
              J'accompagne tous les jours des femmes comme toi, brillantes et capables de beaucoup de grandeur, <strong>MAIS QUAND ELLES VIENNENT ME VOIR...</strong>
            </p>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              C'est souvent à un moment de leur vie où elles ne se sentent plus à leur place. Elles ressentent un malaise diffus, une perte de sens, sans toujours réussir à mettre des mots sur ce qui ne va pas, ni sur ce qu'elles veulent vraiment à la place. Parfois, au fond, elles savent ce qu'elles veulent mais la peur d'y aller ou de l'incarner pleinement les retient encore.
            </p>
          </div>
        </div>
      </div>
    </section>;
};