import { Button } from "@/components/ui/button";
import worldMapImage from "@/assets/eirenaios-world-map.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with world map */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${worldMapImage})` }}
      />
      
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue-deep via-cosmic-blue to-aurora-green opacity-80" />
      
      {/* Floating light orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-ethereal-float" />
      <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-accent/20 blur-xl animate-ethereal-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-40 w-40 h-40 rounded-full bg-luminous-gold/10 blur-xl animate-ethereal-float" style={{ animationDelay: '4s' }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Eirenaios
            </span>
          </h1>
          
          <h2 className="font-philosopher text-2xl md:text-3xl text-muted-foreground mb-8">
            The World of the Anti-War Architect
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-philosopher">
              "Eirenaios" derives from the Greek 'eirēnē' — meaning peace. This is a world designed by those who've seen the cost of war and decided to craft an irreversible alternative.
            </p>
          </div>
          
          <div className="space-x-6">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-glow transition-all duration-500 animate-glow-pulse font-philosopher text-lg px-8 py-4"
            >
              Enter the World
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500 font-philosopher text-lg px-8 py-4"
            >
              The Architect's Vision
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};