import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  impact: string;
  accentColor: string;
}
const ProjectCard = ({
  title,
  description,
  tags,
  impact,
  accentColor,
}: ProjectCardProps) => {
  return (
    <Card className="card-hover bg-card border-none shadow-md overflow-hidden">
      <div className={`h-2 ${accentColor}`} />
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
        <p className="text-foreground/80 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-background text-foreground border border-border"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-primary font-semibold">
          <span className="text-lg">📊 {impact}</span>
        </div>
      </CardContent>
    </Card>
  );
};
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
            <img
              alt="AI and healthcare technology collaboration"
              className="relative w-64 h-40 sm:w-80 sm:h-52 rounded-2xl border-2 border-card shadow-xl object-cover"
              src="lovable-uploads/9493f143-aecf-408c-a030-9785e791982a.png"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto lg:mx-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <ProjectCard
            title="Independent AI Consultant"
            description="Consult with leading AI companies on foundational model safety. Red-teaming/adversarial testing of LLMs and chatbots, with a focus on failure modes and harmful outputs. My work includes crafting prompts and scenarios to test model guardrails, exploring creative ways to bypass restrictions, and systematically documenting outcomes."
            tags={["LLM Red-Teaming", "AI Safety", "Data Curation"]}
            impact="Jun 2025 - Present"
            accentColor="bg-cyan"
          />
          <ProjectCard
            title="VA Virtual Care Transformation"
            description="Led development and national implementation of virtual behavioral health programs across the largest integrated healthcare system in the US, serving thousands of veterans."
            tags={[
              "Implementation Science",
              "Virtual Care",
              "Behavioral Health",
            ]}
            impact="2,000+ patients served"
            accentColor="bg-primary"
          />
          <ProjectCard
            title="Enterprise Behavioral Health Innovation"
            description="Directed clinical innovation portfolio at Highmark Health ($29.4B company), connecting payers, providers, and tech partners to build integrated health ecosystems."
            tags={["Digital Health", "Product Strategy", "Member Engagement"]}
            impact="Enterprise-scale solutions"
            accentColor="bg-secondary"
          />
          <ProjectCard
            title="Applied Behavioral Science"
            description="Integrate behavioral science strategies into marketing initiatives to increase ROMI and drive conversion rates."
            tags={["Behavioral Science", "ROI", "Marketing"]}
            impact="National reach"
            accentColor="bg-accent"
          />
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
