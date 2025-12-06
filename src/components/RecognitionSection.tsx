import { Check } from "lucide-react";

const RecognitionSection = () => {
  const awards = [
    "VA HSR&D Career Development Award (5-year)",
    "NIH National Research Service Award",
    "Licensed Clinical Psychologist (California)",
    "USA Parasurf National Team Member",
  ];

  const affiliations = [
    "Core Investigator, VA Center for Care Delivery & Outcomes Research",
    "Former Assistant Professor, University of Minnesota",
    "Senior Director of Research, National Sleep Foundation",
    "Applied Behavioral Science Director, Teladoc Health",
  ];

  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Recognition & Credentials
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Awards & Honors</h3>
            <ul className="space-y-4">
              {awards.map((award, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{award}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Professional Affiliations</h3>
            <ul className="space-y-4">
              {affiliations.map((affiliation, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{affiliation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
