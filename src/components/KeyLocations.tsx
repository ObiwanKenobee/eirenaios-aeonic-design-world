import { Card } from "@/components/ui/card";

const locations = [
  {
    name: "Kairos Core",
    description: "The city-heart where Aeon Kairos resides. Holds the Peace Codex mainframe.",
    gradient: "from-primary/20 to-primary-glow/20"
  },
  {
    name: "The Sol Forums",
    description: "World debates happen not in parliaments, but in light gardens.",
    gradient: "from-luminous-gold/20 to-primary/20"
  },
  {
    name: "Regen Vaults",
    description: "Libraries of failed war systems, preserved to never be repeated.",
    gradient: "from-accent/20 to-aurora-green/20"
  },
  {
    name: "The Orbital Loom",
    description: "A satellite ring that transmits regenerative knowledge to every region.",
    gradient: "from-cosmic-blue/20 to-accent/20"
  }
];

export const KeyLocations = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">
            🏞️ Key Locations
          </h2>
          <p className="font-philosopher text-xl text-muted-foreground max-w-3xl mx-auto">
            Sacred spaces where the work of peace unfolds across Eirenaios.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card 
              key={index}
              className="relative p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-500 group overflow-hidden"
            >
              {/* Dynamic background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${location.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                  {location.name}
                </h3>
                <p className="text-foreground/80 font-philosopher leading-relaxed text-lg">
                  {location.description}
                </p>
              </div>
              
              {/* Floating orb animation */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};