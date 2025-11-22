import rimaPhoto from "@/assets/rima-photo.jpg";

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-foreground">
          Qui suis-je pour t'accompagner ?
        </h2>

        <div className="space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <img 
              src={rimaPhoto} 
              alt="Rima - Coach et accompagnatrice" 
              className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-primary/20"
            />
            <p className="text-2xl font-serif text-primary">
              Je m'appelle Rima
            </p>
          </div>

          <div className="bg-accent/30 p-10 rounded-3xl border border-border/50 space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-primary text-center">
              MA CONVICTION
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed text-center italic">
              Quand on est alignée avec qui on est, tout devient magnétique en nous : Le corps, la voix, la présence, l'énergie. Et c'est cette authenticité qui touche, inspire et impacte le monde qui nous entoure.
            </p>
            <p className="text-center text-foreground/70 italic">
              Parce que rien n'est à créer, tout ce que tu veux devenir existe déjà en toi, il suffit d'apprendre à l'écouter.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/70">
            <p className="leading-relaxed">
              Ingénieure de formation et ancienne consultante en stratégie digitale, j'ai passé plusieurs années à accompagner des organisations à se transformer avec clarté, structure et vision.
            </p>
            
            <p className="leading-relaxed">
              Je suis également artiste, danseuse et chanteuse depuis 2015. Depuis près de dix ans, j'ai accompagné plus d'une centaine d'élèves dès leurs premiers pas en danse à dépasser leurs blocages, à prendre confiance en leur expression, et à monter sur scène avec assurance et présence.
            </p>
            
            <p className="leading-relaxed">
              En 2025, j'ai décidé d'incarner ma mission de vie en devenant Coach certifiée et en créant <strong className="text-primary">ONDALUZ</strong>, une entreprise qui fusionne coaching mental, coaching somatique et expression artistique : Une approche unique, à la croisée de mes compétences et ma personnalité authentique, dédiée à aider chaque personne à s'aligner intérieurement, incarner sa vérité d'abord, puis rayonner cette puissance sur scène, devant la caméra et bien au-delà.
            </p>
            
            <p className="leading-relaxed">
              En 1 an, j'ai sorti mon premier single, j'ai créé ma troupe de danse qui va se produire en France et à l'international, je me suis certifiée en coaching et j'ai créé cet accompagnement pour lequel plusieurs femmes m'ont déjà fait confiance et sont ressorties avec des résultats incroyablement touchants.
            </p>

            <p className="leading-relaxed text-primary font-medium text-xl text-center italic pt-6">
              Tout est allé si vite depuis que je suis alignée, et je te promets que dès que tu t'alignes vraiment avec qui tu es, tout ira très bien et très vite pour toi aussi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
