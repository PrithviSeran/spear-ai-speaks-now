
import { ArrowRight, Phone, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">AI-powered voice automation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
            Never Miss a
            <span className="gradient-text block">Customer Call</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            AI voice agents that handle your inbound calls 24/7, qualify leads, book appointments, and convert prospects into customers while you focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gradient-blue hover:opacity-90 transition-opacity text-lg px-8 py-6 h-14">
              <Phone className="mr-3 h-5 w-5" />
              Book a Demo
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card text-lg px-8 py-6 h-14">
              <Play className="mr-3 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Trusted by 500+ businesses</span>
            </div>
            
            <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto opacity-60">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Lead Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">3x</div>
                <div className="text-sm text-muted-foreground">Faster Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
