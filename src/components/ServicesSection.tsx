import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  audience: string;
  services: string[];
  ctaText: string;
}

const ServiceCard = ({ title, audience, services, ctaText }: ServiceCardProps) => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Card className="border-2 border-border bg-transparent hover:bg-primary hover:border-primary transition-all duration-300 group">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary-foreground">{title}</h3>
        <p className="text-foreground/70 mb-6 group-hover:text-primary-foreground/90">{audience}</p>
        <ul className="space-y-3 mb-8">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent group-hover:text-primary-foreground mr-2">✓</span>
              <span className="text-foreground/80 group-hover:text-primary-foreground/90">{service}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary-foreground group-hover:text-primary group-hover:border-primary-foreground"
          onClick={scrollToContact}
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          How We Can Work Together
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard
            title="AI Safety & Red-Teaming"
            audience="For AI companies, research labs, and organizations deploying LLMs"
            services={[
              "Adversarial testing of LLMs and chatbots",
              "Guardrail evaluation and bypass testing",
              "Training data curation and review",
              "Harmful output documentation and mitigation",
            ]}
            ctaText="Discuss AI Safety Needs"
          />
          <ServiceCard
            title="Behavioral Science"
            audience="For product teams, health tech companies, and digital platforms"
            services={[
              "Behavior change program design",
              "User engagement optimization",
              "Evidence-based intervention development",
              "Outcome measurement frameworks",
            ]}
            ctaText="Explore Behavioral Science"
          />
          <ServiceCard
            title="Strategic Consulting"
            audience="For healthcare organizations, digital health companies, and health tech startups"
            services={[
              "Virtual care strategy",
              "Behavioral health program design",
              "Implementation planning",
              "Clinical product strategy",
            ]}
            ctaText="Discuss Your Project"
          />
          <ServiceCard
            title="Research & Evaluation"
            audience="For health systems, research institutions, and industry partners"
            services={[
              "Study design",
              "Instrument validation",
              "Program evaluation",
              "Evidence synthesis",
            ]}
            ctaText="Explore Research Collaboration"
          />
          <ServiceCard
            title="Speaking & Training"
            audience="For conferences, healthcare organizations, and academic institutions"
            services={[
              "Digital health implementation",
              "Behavioral science in healthcare",
              "Sleep health",
              "Health equity",
            ]}
            ctaText="Book a Speaking Engagement"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
