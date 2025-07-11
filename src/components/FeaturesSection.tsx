import { Shield, Clock, Bot, Zap, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      {/* Minimal animated particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle wave line */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient-features" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.3)" />
            <stop offset="100%" stopColor="rgba(30, 64, 175, 0.2)" />
          </linearGradient>
        </defs>
        
        <path
          stroke="url(#line-gradient-features)"
          strokeWidth="1"
          fill="none"
          d={`M-100,${300 + Math.sin(time * 0.5) * 15} Q${300 + Math.sin(time * 0.3) * 20},${290 + Math.cos(time * 0.6) * 15} ${600 + Math.sin(time * 0.4) * 18},${300 + Math.sin(time * 0.7) * 12} T${1000 + Math.sin(time * 0.2) * 20},${300 + Math.cos(time * 0.5) * 15} T${1400},${300 + Math.sin(time * 0.8) * 18}`}
        />
      </svg>
    </div>
  );
};

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and HIPAA compliance for all conversations",
      highlight: "SOC 2 Type II",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call again with round-the-clock AI coverage",
      highlight: "Zero downtime",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Bot,
      title: "Natural Conversations",
      description: "Human-like interactions that customers love and trust",
      highlight: "98% satisfaction",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Zap,
      title: "Instant Integration",
      description: "Connect with your CRM, calendar, and tools in minutes",
      highlight: "500+ integrations",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: CheckCircle,
      title: "Lead Qualification",
      description: "Automatically qualify leads and schedule appointments",
      highlight: "3x conversion",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Phone,
      title: "Multi-Language Support",
      description: "Support customers in their preferred language globally",
      highlight: "40+ languages",
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">Powerful</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade AI technology that scales with your business and delivers measurable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-500 group h-full backdrop-blur-sm hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/15 cursor-pointer ${
                hoveredCard === index ? 'ring-1 ring-blue-400/20' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6 h-full flex flex-col relative">
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-3 transition-opacity duration-500 rounded-lg`}></div>
                
                {/* Icon with subtle background */}
                <div className="relative mb-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-lg blur-md group-hover:opacity-20 transition-all duration-500`}></div>
                  <div className="relative bg-white/5 p-2.5 rounded-lg border border-white/10 group-hover:border-blue-400/30 transition-all duration-300 w-fit">
                    <feature.icon className="h-6 w-6 text-blue-400 group-hover:scale-105 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Highlight badge */}
                <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${feature.color} bg-opacity-10 px-2.5 py-1 rounded-full mb-4 self-start`}>
                  <span className="text-xs font-medium text-white/90">{feature.highlight}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 flex-1 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Subtle arrow */}
                <div className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-70 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                  <span className="text-xs font-medium mr-1">Learn more</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;