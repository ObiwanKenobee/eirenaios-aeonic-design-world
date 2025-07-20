import { Card } from "@/components/ui/card";
import architectPortrait from "@/assets/aeon-kairos-portrait.jpg";

export const ArchitectSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={architectPortrait}
                alt="Aeon Kairos - The Anti-War Architect"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue-deep/60 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-ethereal-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-ethereal-float" style={{ animationDelay: '2s' }} />
          </div>
          
          {/* Content side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-5xl font-bold text-foreground mb-4">
                🧬 The Architect
              </h2>
              
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-philosopher text-xl font-bold text-primary mb-2">💠 Name:</h3>
                    <p className="text-foreground/90 font-philosopher text-lg">
                      <span className="font-bold">Aeon Kairos</span> – The Anti-War Architect<br />
                      <span className="text-muted-foreground">(Aeon = Eternal / Kairos = Divine timing)</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-philosopher text-xl font-bold text-accent mb-3">👤 Archetype:</h3>
                    <ul className="space-y-2 text-foreground/90 font-philosopher">
                      <li>• Master Systems Thinker</li>
                      <li>• Ethicist, Builder, Restorer</li>
                      <li>• Technologist of Regenerative Peace</li>
                      <li>• Diplomatic Dreamer</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-philosopher text-xl font-bold text-primary mb-3">🧭 Mission:</h3>
                    <p className="text-foreground/90 font-philosopher leading-relaxed">
                      To end the war blueprint of civilization by replacing it with <span className="text-primary font-bold">The Aeonic Design</span> — a way of life where every conflict becomes a design challenge.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="text-center">
              <blockquote className="font-playfair text-2xl italic text-accent font-bold">
                "The future isn't won with war. It's woven with wisdom."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};