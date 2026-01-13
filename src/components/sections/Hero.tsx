import dancer1 from "@/assets/dancer-1.jpg";
import dancer2 from "@/assets/dancer-2.jpg";
import dancer3 from "@/assets/dancer-3.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#968B7E]">
      {/* Image Grid Background - NO CAMBIAR */}
      <div className="absolute inset-0 grid grid-cols-3 gap-0 opacity-60">
        <div className="bg-cover bg-center" style={{backgroundImage: `url(${dancer1})`}}></div>
        <div className="bg-cover bg-center" style={{backgroundImage: `url(${dancer2})`}}></div>
        <div className="bg-cover bg-center" style={{backgroundImage: `url(${dancer3})`}}></div>
      </div>
      
      {/* Overlay - NO CAMBIAR */}
      <div className="absolute inset-0 bg-[#968B7E]/50"></div>
      
      <div className="relative z-10 container px-4 md:px-6 py-16 md:py-20 text-center max-w-4xl">
        {/* 🔥 NUEVO TÍTULO - OPCIÓN B+D HÍBRIDA APROBADA */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold tracking-wide leading-tight mb-6 md:mb-8">
          REDEVIENS ENFIN<br />
          PLEINEMENT TOI-MÊME
        </h1>
        
        <div className="space-y-6 md:space-y-8">
          {/* 🔥 NUEVO SUBTÍTULO - COPY APROBADO */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-light text-white/95 leading-relaxed">
              Pour la femme brillante en toi<br />
              qui ne se reconnaît plus dans sa vie actuelle
            </p>
            
            <p className="text-base md:text-lg font-light text-white/90 italic leading-relaxed px-4 md:px-0">
              En 6 modules, clarifies ta direction,<br />
              reconnectes à ta mission de vie<br />
              et réaligne toi profondément avec qui tu es<br />
              <span className="text-sm md:text-base opacity-90">
                sans sacrifier ta stabilité ni tout ce que tu as construit jusqu'ici
              </span>
            </p>
          </div>

          {/* Stats - MOBILE OPTIMIZED */}
          <div className="flex flex-row gap-4 md:gap-8 justify-center items-center text-xs md:text-sm pt-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif text-white">6</span>
              <span className="text-white/80 uppercase tracking-wide">semaines</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif text-white">10</span>
              <span className="text-white/80 uppercase tracking-wide">séances</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif text-white">3</span>
              <span className="text-white/80 uppercase tracking-wide text-center leading-tight">
                mois<br className="md:hidden" /> de suivi
              </span>
            </div>
          </div>

          {/* 🔥 CTA MOBILE-OPTIMIZED */}
          <div className="pt-6 md:pt-8 space-y-3">
            <Button 
              size="lg" 
              className="w-full md:w-auto bg-white hover:bg-white/90 text-taupe px-8 md:px-12 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium" 
              asChild
            >
              <a href="#contact">Réserve ta séance découverte gratuite</a>
            </Button>
            
            {/* Objeciones - COMPACTAS PARA MÓVIL */}
            <p className="text-xs md:text-sm text-white/80 px-2">
              ✓ Sans engagement · ✓ Gratuite · ✓ 5 places/mois
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
