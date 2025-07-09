import { ArrowRight, Phone, Bot, Zap, Shield, Clock, CheckCircle, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
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

      {/* How It Works Section */}
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
            {[
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
            ].map((item, index) => (
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

      {/* Features Section */}
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
            {[
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
            ].map((feature, index) => (
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">Spear AI</div>
            <div className="text-muted-foreground text-sm">
              © 2024 Spear AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
