import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: "🧠",
    title: "Ethical Intelligence",
    description: "Decisions guided by collective memory, moral AI, and indigenous wisdom."
  },
  {
    icon: "🛠",
    title: "Constructive Conflict",
    description: "Disagreements become design sprints: \"No war, only builds.\""
  },
  {
    icon: "🌍",
    title: "Decentralized Governance",
    description: "Civic AI + local councils, no central military-industrial complex."
  },
  {
    icon: "♻️",
    title: "Bioregional Unity",
    description: "Communities organized by ecosystems, not borders."
  },
  {
    icon: "🔮",
    title: "Mythic Regeneration",
    description: "Culture is healed through stories, rituals, and new shared myths."
  }
];

export const WorldPillars = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">
            🛖 World Overview: Eirenaios
          </h2>
          <p className="font-philosopher text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A regenerative intercontinental city-world built after the collapse of global warfare systems. 
            It is governed not by nations, but by Bioregional Councils and Ethical AI Consensus Platforms.
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="font-philosopher text-2xl font-bold text-primary text-center mb-8">
            🌿 World Pillars
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="text-center space-y-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h4 className="font-philosopher text-lg font-bold text-primary">
                  {pillar.title}
                </h4>
                <p className="text-foreground/80 text-sm leading-relaxed font-philosopher">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};