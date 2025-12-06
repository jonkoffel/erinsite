import { useEffect, useState, useRef } from "react";
import { Users, BookOpen, TrendingUp, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}
const StatCard = ({
  icon,
  value,
  suffix,
  label
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        return () => clearInterval(timer);
      }
    }, {
      threshold: 0.5
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, [value, hasAnimated]);
  return <Card ref={cardRef} className="p-6 text-center card-hover border-l-4 border-l-primary bg-card">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <div className="text-4xl font-bold text-primary mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-foreground/70">{label}</p>
    </Card>;
};
const ImpactSection = () => {
  return <section id="impact" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Impact by the Numbers</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <StatCard icon={<Users className="h-12 w-12" />} value={2000} suffix="+" label="Patients Treated" />
          <StatCard icon={<BookOpen className="h-12 w-12" />} value={4000} suffix="+" label="Research Citations" />
          <StatCard icon={<TrendingUp className="h-12 w-12" />} value={2} suffix="M+" label="Research Funding" />
          <StatCard icon={<GraduationCap className="h-12 w-12" />} value={200} suffix="+" label="Clinicians Trained" />
        </div>
      </div>
    </section>;
};
export default ImpactSection;