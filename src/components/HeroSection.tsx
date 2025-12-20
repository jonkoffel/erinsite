import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/erin-koffel-profile.jpg";
const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
                <img
                  alt="Dr. Erin Koffel"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-card shadow-2xl"
                  src="media/b0c058fc-136b-49e0-9be3-99e3d22c56af.jpg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transforming Behavioral Health Research Into{" "}
                <span className="text-gradient-teal">Virtual Solutions</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground mb-6 bg-muted text-center py-3">
                Clinical Psychologist | Behavioral Scientist | AI Consultant
              </p>

              <p className="text-base sm:text-lg text-foreground/80 mb-8 leading-relaxed">
                I help companies design evidence-based virtual experiences that
                drive patient engagement, improve clinical outcomes, and deliver
                measurable ROI. I specialize in user safety, trust and
                harm-reduction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
                  onClick={scrollToContact}
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
                  onClick={scrollToProjects}
                >
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
