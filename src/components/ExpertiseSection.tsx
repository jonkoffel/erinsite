import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, FlaskConical, Sparkles } from "lucide-react";
interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}
const ExpertiseCard = ({
  icon,
  title,
  description,
  points
}: ExpertiseCardProps) => {
  return <Card className="card-hover bg-card border-none shadow-md">
      <CardContent className="p-6 sm:p-8">
        <div className="flex justify-center mb-6 text-primary">{icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-foreground">{title}</h3>
        <p className="text-foreground/80 text-center mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {points.map((point, index) => <li key={index} className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span className="text-foreground/70">{point}</span>
            </li>)}
        </ul>
      </CardContent>
    </Card>;
};
const ExpertiseSection = () => {
  return <section id="expertise" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
            <img alt="Dr. Erin Koffel professional headshot" src="/lovable-uploads/erin-koffel-headshot.jpeg" className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl border-2 border-card shadow-xl object-scale-down" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Where Clinical Excellence Meets Virtual Innovation</h2>
            <div className="w-20 h-1 bg-primary mx-auto lg:mx-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ExpertiseCard icon={<HeartPulse className="h-16 w-16" />} title="Clinical Excellence" description="Licensed clinical psychologist with expertise in behavioral sleep treatment, trauma care, and primary care integration" points={["CBT-I Provider", "Prolonged Exposure Provider", "8+ years VA experience"]} />
          <ExpertiseCard icon={<FlaskConical className="h-16 w-16" />} title="Research & Implementation" description="Implementation scientist translating evidence-based practices into sustainable, scalable programs" points={["H-index 26", "5-year Career Development Award", "Mixed-methods expertise"]} />
          <ExpertiseCard icon={<Sparkles className="h-16 w-16" />} title="Digital Strategy" description="Behavioral science leader driving engagement, adoption, and outcomes in consumer health platforms" points={["A/B testing", "User experience optimization", "Virtual care program design"]} />
        </div>
      </div>
    </section>;
};
export default ExpertiseSection;