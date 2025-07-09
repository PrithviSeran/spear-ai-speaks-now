
import { Phone, Bot, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: Phone,
      title: "Call Received",
      description: "Customer calls your business number and is instantly connected to your AI voice agent"
    },
    {
      step: "02", 
      icon: Bot,
      title: "AI Processes",
      description: "Our AI understands customer needs, answers questions, and gathers information naturally"
    },
    {
      step: "03",
      icon: Zap,
      title: "Action Taken",
      description: "Appointments booked, leads qualified, and follow-ups scheduled automatically"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Set up your AI voice agent in minutes and start converting calls into customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <Card key={index} className="relative bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <div className="w-14 h-14 gradient-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
