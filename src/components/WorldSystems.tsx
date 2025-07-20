import { Card } from "@/components/ui/card";

const systems = [
  {
    icon: "💡",
    title: "Governance",
    items: [
      "PeaceCodex – A living digital constitution updated by people + AI every season.",
      "The Agora Cloud – Global dialogue space for collective problem-solving.",
      "Conflict Design Bureaus – Where former generals become planetary stewards."
    ]
  },
  {
    icon: "🧬",
    title: "Energy",
    items: [
      "Luminous Energy – Peace-powered technology: geothermal, vibrational, and sound-based energy transmission systems.",
      "Every innovation regenerates the Earth by default."
    ]
  },
  {
    icon: "📚",
    title: "Education",
    items: [
      "Universities of Unlearning – Where students unlearn colonization, war logic, and zero-sum thinking.",
      "Architect Guilds – Train new Peace Engineers and Ethical Builders."
    ]
  }
];

export const WorldSystems = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">
            🏗️ World Systems Design
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {system.icon}
                  </span>
                  <h3 className="font-philosopher text-2xl font-bold text-primary">
                    {system.title}
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {system.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="text-foreground/80 font-philosopher leading-relaxed border-l-2 border-accent/30 pl-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};