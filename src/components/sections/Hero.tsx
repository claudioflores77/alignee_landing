import heroImage from "@/assets/hero-woman.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-beige-light/90 via-cream/85 to-rose-soft/80" />
      </div>
      
      <div className="container relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-foreground tracking-tight">
            ALIGNÉE
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/80 font-light italic">
            deviens enfin vraiment toi
          </p>
          
          <div className="space-y-4 py-8">
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              6 semaines pour sortir du brouillard, retrouver ta direction et te réaligner avec la femme que tu es vraiment
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm md:text-base">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-serif text-primary">6</span>
              <span className="text-muted-foreground uppercase tracking-wide">semaines</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-serif text-primary">1</span>
              <span className="text-muted-foreground uppercase tracking-wide">séances</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-serif text-primary">3</span>
              <span className="text-muted-foreground uppercase tracking-wide">mois de suivi offerts</span>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#contact">Réserve ta première séance gratuite</a>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Sans engagement · Première séance offerte · 5 places par mois
            </p>
            
            <p className="text-sm text-foreground/60 italic">
              5 femmes ont déjà testé et te partagent leur expérience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
