import rimaDancing from "@/assets/rima-dancing.jpg";

export const Approach = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background dancer image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${rimaDancing})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-accent/95" />
      
      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-foreground">
          Mon approche unique mêlant<br />
          <span className="text-primary">coaching mental et somatique</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-10 rounded-3xl border border-border shadow-sm">
            <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">
              Le coaching mental
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              t'aide à clarifier tes pensées, comprendre tes schémas, mettre de la conscience et du sens.
            </p>
          </div>

          <div className="bg-card p-10 rounded-3xl border border-border shadow-sm">
            <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">
              Le coaching somatique
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              lui, passe par le corps, respiration, ancrage, l'écoute des sensations, car ton corps sait avant ta tête là où tu n'es plus à ta place.
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-8">
          <p className="text-xl text-foreground/80 leading-relaxed">
            En reconnectant ces deux dimensions, tu n'agis plus contre toi, mais avec toi. Tes décisions deviennent plus justes, plus fluides, plus naturelles.
          </p>

          <div className="pt-8">
            <p className="text-lg text-foreground/70 italic leading-relaxed">
              Je crois profondément que notre mission de vie ne se "construit" pas en brainstormant par un simple travail de l'esprit. Elle émerge de ce que nous sommes déjà.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
