
import { ArrowRight, Phone, Bot, Zap, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">Spear AI</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="gradient-blue hover:opacity-90 transition-opacity">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI Voice Agents That
              <span className="gradient-text block mt-2">Transform Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Automate your inbound calls with intelligent AI voice agents that handle customer inquiries 24/7, converting leads while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="gradient-blue hover:opacity-90 transition-opacity text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
            
            {/* Demo Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Lead Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3x</div>
                <div className="text-muted-foreground">Faster Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text">Spear AI</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI voice agents seamlessly integrate with your existing systems to handle inbound calls intelligently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Incoming Call</h3>
                <p className="text-muted-foreground">
                  Customer calls your business number, instantly connected to our AI voice agent.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Processing</h3>
                <p className="text-muted-foreground">
                  Our AI understands customer needs, answers questions, and gathers information naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Automated Action</h3>
                <p className="text-muted-foreground">
                  Appointments booked, leads qualified, and follow-ups scheduled automatically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate your customer interactions and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level encryption and HIPAA compliance for sensitive conversations."
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Never miss a call again. Your AI agent works around the clock."
              },
              {
                icon: Bot,
                title: "Natural Conversations",
                description: "Human-like interactions that customers love and trust."
              },
              {
                icon: Zap,
                title: "Instant Integration",
                description: "Connect with your CRM, calendar, and existing tools in minutes."
              },
              {
                icon: CheckCircle,
                title: "Lead Qualification",
                description: "Automatically qualify leads and schedule appointments."
              },
              {
                icon: Phone,
                title: "Multi-Language",
                description: "Support customers in their preferred language globally."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all group hover:scale-105">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Automate</span> Your Calls?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses already using Spear AI to transform their customer experience.
            </p>
            <Button size="lg" className="gradient-blue hover:opacity-90 transition-opacity text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to see how Spear AI can transform your business? Let's talk.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Schedule a Demo</h3>
                    <p className="text-muted-foreground mb-6">
                      See our AI voice agents in action with a personalized demo.
                    </p>
                    <Button className="gradient-blue hover:opacity-90 transition-opacity w-full">
                      Book Demo Call
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Contact Sales</h3>
                    <p className="text-muted-foreground mb-6">
                      Have questions? Our team is here to help you get started.
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">Spear AI</div>
            <div className="text-muted-foreground">
              © 2024 Spear AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
