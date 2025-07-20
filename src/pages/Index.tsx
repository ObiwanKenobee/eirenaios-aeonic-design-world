import { Hero } from "@/components/Hero";
import { ArchitectSection } from "@/components/ArchitectSection";
import { WorldPillars } from "@/components/WorldPillars";
import { WorldSystems } from "@/components/WorldSystems";
import { SocietyRoles } from "@/components/SocietyRoles";
import { KeyLocations } from "@/components/KeyLocations";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ArchitectSection />
      <WorldPillars />
      <WorldSystems />
      <SocietyRoles />
      <KeyLocations />
      <Footer />
    </div>
  );
};

export default Index;
