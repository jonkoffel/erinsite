import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      organization: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-muted-foreground">
          Let's Connect
        </h2>
        <p className="text-lg sm:text-xl text-center text-muted-foreground/90 mb-12 max-w-3xl mx-auto">Ready to transform your virtual health strategy?</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-card text-foreground border-border" />
              </div>
              <div>
                <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="bg-card text-foreground border-border" />
              </div>
              <div>
                <Input name="organization" placeholder="Your Organization" value={formData.organization} onChange={handleChange} className="bg-card text-foreground border-border" />
              </div>
              <div>
                <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} className="bg-card text-foreground border-border" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              
              <div>
                
                
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Linkedin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-muted-foreground mb-1">LinkedIn</h3>
                <a href="https://linkedin.com/in/erin-koffel-phd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/80 hover:text-secondary transition-colors">
                  linkedin.com/in/erin-koffel-phd
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-muted-foreground mb-1">Location</h3>
                <p className="text-muted-foreground/80">Santa Cruz, California</p>
              </div>
            </div>

            <div className="bg-card/50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-foreground mb-3">Currently Accepting</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• AI safety & red-teaming projects</li>
                <li>• Behavioral science consulting</li>
                <li>• Strategic consulting projects</li>
                <li>• Speaking engagements</li>
                <li>• Research collaborations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;