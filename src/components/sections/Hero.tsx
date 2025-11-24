import dancer1 from "@/assets/dancer-1.jpg";
import dancer2 from "@/assets/dancer-2.jpg";
import dancer3 from "@/assets/dancer-3.jpg";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#968B7E]">
      {/* Image Grid Background */}
      <div className="absolute inset-0 grid grid-cols-3 gap-0 opacity-60">
        <div className="bg-cover bg-center" style={{
        backgroundImage: `url(${dancer1})`
      }}></div>
        <div className="bg-cover bg-center" style={{
        backgroundImage: `url(${dancer2})`
      }}></div>
        <div className="bg-cover bg-center" style={{
        backgroundImage: `url(${dancer3})`
      }}></div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#968B7E]/50"></div>
      
      <div className="relative z-10 container px-6 py-20 text-center max-w-4xl">
        {/* Layered Title Effect */}
        <div className="relative mb-12">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-white font-bold tracking-wider">
            ALIGNÉE
          </h1>
          <h1 className="absolute inset-0 text-7xl md:text-8xl lg:text-9xl font-serif text-transparent font-bold tracking-wider" style={{
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)',
          transform: 'translateY(-8px)'
        }}>
            ALIGNÉE
          </h1>
        </div>
        
        <div className="space-y-8">
          <p className="text-xl md:text-2xl font-light text-white/95 italic leading-relaxed tracking-wide">
            6 SEMAINES POUR<br />
            SORTIR DU BROUILLARD,<br />
            RETROUVER TA DIRECTION<br />
            ET TE RÉALIGNER AVEC<br />
            LA FEMME QUE TU ES VRAIMENT
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm md:text-base">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-serif text-white">6</span>
              <span className="text-white/80 uppercase tracking-wide">semaines</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-serif text-white">10</span>
              <span className="text-white/80 uppercase tracking-wide">séances</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-serif text-white">3</span>
              <span className="text-white/80 uppercase tracking-wide">mois de suivi offerts</span>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <Button size="lg" className="bg-white hover:bg-white/90 text-taupe px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <a href="#contact">Réserve ta première séance gratuite</a>
            </Button>
            
            <p className="text-sm text-white/80">
              Sans engagement · Première séance offerte · 5 places par mois
            </p>
            
            
          </div>
        </div>
      </div>
    </section>;
};