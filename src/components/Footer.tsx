import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-gradient-to-t from-cosmic-blue-deep to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Call to action */}
        <div className="mb-12">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
            Join the Architect Guild
          </h2>
          <p className="font-philosopher text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Help us build a world where conflict becomes creation, where every challenge is an opportunity to design peace.
          </p>
          
          <div className="space-x-6">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-glow transition-all duration-500 font-philosopher text-lg px-8 py-4"
            >
              Begin Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500 font-philosopher text-lg px-8 py-4"
            >
              Learn the Codex
            </Button>
          </div>
        </div>
        
        {/* Signature quote */}
        <div className="border-t border-border/30 pt-12">
          <blockquote className="font-playfair text-3xl italic text-primary mb-6 max-w-4xl mx-auto">
            "The future isn't won with war. It's woven with wisdom."
          </blockquote>
          <p className="font-philosopher text-muted-foreground">
            — Aeon Kairos, The Anti-War Architect
          </p>
        </div>
        
        {/* Credits */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <p className="font-philosopher text-sm text-muted-foreground">
            A vision of regenerative peace for humanity's future
          </p>
        </div>
      </div>
    </footer>
  );
};