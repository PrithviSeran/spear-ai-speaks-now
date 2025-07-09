
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-card/20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses already using Spear AI to automate their customer calls and boost conversions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-blue hover:opacity-90 transition-opacity text-lg px-8 py-6 h-14">
              <Phone className="mr-3 h-5 w-5" />
              Start Free Trial
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card text-lg px-8 py-6 h-14">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
