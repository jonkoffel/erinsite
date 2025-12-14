import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PublicationsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Research & Publications
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Contributing to the scientific literature on sleep medicine,
            behavioral health, and implementation science
          </p>

          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  39
                </div>
                <div className="text-sm text-foreground/70">
                  Peer-reviewed publications
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  24
                </div>
                <div className="text-sm text-foreground/70">First-authored</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  4,000+
                </div>
                <div className="text-sm text-foreground/70">Citations</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  26
                </div>
                <div className="text-sm text-foreground/70">H-index</div>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            onClick={() =>
              window.open(
                "https://www.ncbi.nlm.nih.gov/myncbi/185s0VALkII/bibliography/public/",
                "_blank"
              )
            }
          >
            View Complete Bibliography
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
