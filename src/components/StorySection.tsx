import { Card } from "@/components/ui/card";
const StorySection = () => {
  return <section className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-muted-foreground">
          Beyond the Clinic
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a member of the USA Parasurf Team, I've competed internationally and advocate for parasurfing's 
                inclusion in the 2028 LA Paralympics. Navigating complex healthcare challenges requires the same 
                skills as adaptive surfing: balance, adaptation, resilience, and the courage to ride the wave of innovation.
              </p>
              
              <Card className="bg-secondary/10 border-l-4 border-l-secondary p-6">
                <blockquote className="text-xl italic text-muted-foreground">
                  "The best solutions come from understanding both the science and the human experience."
                </blockquote>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center overflow-hidden">
                  <img alt="Parasurfing action shot" className="w-full h-full object-cover" src="/lovable-uploads/bb0e9389-5baa-4a55-a6a9-936a99f37155.jpg" />
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center overflow-hidden">
                  <img alt="Beach portrait at Huntington Beach pier" src="/lovable-uploads/3322b0ef-6d2f-4649-8fae-ddc9c0117b44.jpg" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StorySection;