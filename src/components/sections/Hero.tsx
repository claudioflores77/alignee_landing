import heroPhoto1 from "@/assets/hero-photo-1.jpg";
import heroPhoto2 from "@/assets/hero-photo-2.jpg";
import heroPhoto3 from "@/assets/hero-photo-3.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
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
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#968B7E]">
        {/* Image Grid Background */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          <div className="bg-cover bg-center" style={{backgroundImage: `url(${heroPhoto2})`}}></div>
          <div className="bg-cover bg-center" style={{backgroundImage: `url(${heroPhoto1})`}}></div>
          <div className="bg-cover bg-center" style={{backgroundImage: `url(${heroPhoto3})`}}></div>
        </div>
        
        {/* Filtre rosé renforcé */}
        <div className="absolute inset-0 bg-[#C4918A]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#8B7370]/50"></div>
        
        <div className="relative z-10 container px-4 md:px-6 py-16 md:py-20 text-center max-w-4xl">
          {/* Titre principal */}
          <p className="text-5xl md:text-7xl lg:text-8xl font-poppins text-white mb-2 md:mb-4 font-semibold tracking-wide drop-shadow-lg">
            ALIGNÉE
          </p>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins text-white font-light tracking-widest leading-tight mb-6 md:mb-8 uppercase drop-shadow-md">
            Deviens enfin pleinement toi
          </h1>
          
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-poppins font-light text-white leading-relaxed drop-shadow-md">
                Pour la femme brillante en toi<br />
                qui ne se reconnaît plus dans sa vie actuelle
              </p>
              
              <div className="text-base md:text-lg font-poppins font-light text-white leading-loose px-4 md:px-0 drop-shadow-md">
                <p className="mb-2">Un parcours 100% digital pour :</p>
                <p>clarifier ta direction,</p>
                <p>te reconnecter à ta mission de vie</p>
                <p>et te réaligner profondément avec qui tu es</p>
                <p className="mt-2 text-sm md:text-base opacity-90">sans sacrifier ta stabilité</p>
                <p className="text-sm md:text-base opacity-90">ni tout ce que tu as construit jusqu'ici</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-row gap-4 md:gap-8 justify-center items-center text-xs md:text-sm pt-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-poppins font-semibold text-white drop-shadow-md">6</span>
                <span className="text-white uppercase tracking-wide font-poppins">modules</span>
              </div>
              <div className="flex flex-col items-center max-w-[140px] md:max-w-none">
                <span className="text-3xl md:text-5xl font-poppins font-semibold text-white drop-shadow-md">1</span>
                <span className="text-white uppercase tracking-wide font-poppins text-center leading-tight">
                  plan d'action<br />concret, clair et aligné
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-poppins font-semibold text-white text-center leading-tight drop-shadow-md">100%</span>
                <span className="text-white uppercase tracking-wide text-center leading-tight font-poppins">
                  libre et<br className="md:hidden" /> autonome
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 md:pt-8 space-y-3">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-white hover:bg-white/90 text-taupe px-8 md:px-12 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium" 
                asChild
              >
                <a href="#contact">Je commence mon parcours digital dès maintenant pour 49€</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section "À la fin du programme" */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground">
              À la fin de ce programme, tu repars avec :
            </h2>
          </div>

          {/* 4 bénéfices */}
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

          {/* Bonus - Livret */}
          <div className="text-center">
            <div className="inline-block bg-primary/10 px-6 md:px-8 py-3 md:py-4 rounded-full border border-primary/20">
              <p className="text-foreground/80 text-base md:text-lg">
                <span className="text-primary font-medium">+</span> Un livret synthétique qui capte parfaitement l'essence de qui tu es
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
