import { Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/erin-koffel-phd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:eakoffel@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-center text-muted-foreground/80 text-sm">© 2025 Erin Koffel, PhD, LP | Clinical Psychologist | Virtual Health Strategist</p>
        </div>
      </div>
    </footer>;
};
export default Footer;