import { Search, PencilRuler, Rocket, BarChart3 } from "lucide-react";

interface ApproachStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const ApproachStep = ({ number, icon, title, description, isLast }: ApproachStepProps) => {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="relative z-10">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg">
          <div className="text-primary-foreground">{icon}</div>
        </div>
        <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-foreground/70 max-w-xs leading-relaxed">{description}</p>
      
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-primary -z-0" />
      )}
    </div>
  );
};

const ApproachSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          How I Work
        </h2>
        <p className="text-lg sm:text-xl text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          I bridge the gap between rigorous research and real-world implementation
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 max-w-6xl mx-auto relative">
          <ApproachStep
            number={1}
            icon={<Search className="h-10 w-10" />}
            title="Discover"
            description="Deep dive into patient, provider, and organizational needs through qualitative research"
          />
          <ApproachStep
            number={2}
            icon={<PencilRuler className="h-10 w-10" />}
            title="Design"
            description="Create evidence-based solutions with behavioral science principles and user-centered design"
          />
          <ApproachStep
            number={3}
            icon={<Rocket className="h-10 w-10" />}
            title="Implement"
            description="Deploy with implementation science strategies that ensure adoption and sustainability"
          />
          <ApproachStep
            number={4}
            icon={<BarChart3 className="h-10 w-10" />}
            title="Evaluate"
            description="Measure engagement, clinical outcomes, and ROI with continuous improvement loops"
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
