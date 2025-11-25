import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
export const Pricing = () => {
  const included = ["Une première séance offerte", "6 séances individuelles de 1h30-2h chacune", "Exercices à faire toutes les semaines transmis dans un dossier que tu gardes à vie", "Ton book d'outils de régulation personnalisé en fonction de ce qui marche le mieux pour toi", "3 mois de suivi = 3 sessions supplémentaires de 1h30 après les 6 semaines", "10 séances de coaching individuel en tout", "Accès illimité WhatsApp (msg / vocaux) pendant toute la durée de l'accompagnement et du suivi"];
  return <section className="py-24 bg-gradient-to-b from-accent to-background">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
            PRÊTE À COMMENCER ?
          </h2>
        </div>

        <div className="bg-card p-10 md:p-12 rounded-3xl border-2 border-primary/20 shadow-xl mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground mb-4 line-through text-2xl">850€</p>
              <div className="space-y-2">
                <p className="text-6xl md:text-7xl font-serif text-primary">425€</p>
                <p className="text-xl text-foreground/70">Offre de lancement: -50% pour les premières participantes.</p>
                <p className="text-lg text-primary font-medium">Valable jusqu'à épuisement des places.</p>
                <p className="text-lg text-primary font-medium">Plus que 5 places disponibles à ce tarif</p>
              </div>
            </div>

            <div className="bg-accent/30 p-6 rounded-2xl">
              <h3 className="text-xl font-serif text-foreground mb-4">Paiement en 2 fois</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-3">
                La moitié au début de notre accompagnement
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                L'autre moitié à mi-parcours, pour se donner l'espace de créer la confiance et revalider ton choix de continuer à travailler avec moi
              </p>
            </div>
          </div>

          <div className="space-y-6 mb-10">
            <h3 className="text-2xl font-serif text-primary text-center mb-8">INCLUANT</h3>
            <div className="space-y-4">
              {included.map((item, index) => <div key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 leading-relaxed">{item}</p>
                </div>)}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <a href="#contact">Réserve ta séance gratuite</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};