
import { Shield, Clock, Bot, Zap, CheckCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and HIPAA compliance for all conversations"
    },
    {
      icon: Clock,
      title: "24/7 Availability", 
      description: "Never miss a call again with round-the-clock AI coverage"
    },
    {
      icon: Bot,
      title: "Natural Conversations",
      description: "Human-like interactions that customers love and trust"
    },
    {
      icon: Zap,
      title: "Instant Integration",
      description: "Connect with your CRM, calendar, and tools in minutes"
    },
    {
      icon: CheckCircle,
      title: "Lead Qualification",
      description: "Automatically qualify leads and schedule appointments"
    },
    {
      icon: Phone,
      title: "Multi-Language Support",
      description: "Support customers in their preferred language globally"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade AI technology that scales with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground flex-1">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
