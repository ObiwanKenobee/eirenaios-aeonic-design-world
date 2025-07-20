import { Card } from "@/components/ui/card";

const roles = [
  {
    icon: "🛡",
    title: "Peace Engineers",
    purpose: "Replace weapons with healing infrastructures."
  },
  {
    icon: "🦉",
    title: "Wisdom Keepers",
    purpose: "Elders and AI stewards guiding moral evolution."
  },
  {
    icon: "🦾",
    title: "Codecraft Scribes",
    purpose: "Builders of open-source systems that prevent harm."
  },
  {
    icon: "🌱",
    title: "Regen Rangers",
    purpose: "Protect ecosystems and act as planetary mediators."
  },
  {
    icon: "🎭",
    title: "Mythmakers",
    purpose: "Artists who create the new stories of peace."
  }
];

export const SocietyRoles = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">
            🧑‍🤝‍🧑 Society & Roles
          </h2>
          <p className="font-philosopher text-xl text-muted-foreground max-w-3xl mx-auto">
            In Eirenaios, every role serves the greater purpose of maintaining peace and regenerating our world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center space-y-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
                <h3 className="font-philosopher text-lg font-bold text-primary">
                  {role.title}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed font-philosopher">
                  {role.purpose}
                </p>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};