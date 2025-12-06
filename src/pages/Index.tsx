import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import ApproachSection from "@/components/ApproachSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
import RecognitionSection from "@/components/RecognitionSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ImpactSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ApproachSection />
        <StorySection />
        <ServicesSection />
        <RecognitionSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
