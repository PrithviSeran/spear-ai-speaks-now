import { ArrowRight, Phone, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      {/* Top gradient background only */}
      <div className="absolute inset-0 bg-gradient-to-bfrom-black via-gray-950 to-blue-950/30"></div>
      
      {/* Minimal animated particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/25 rounded-full animate-pulse"
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
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient-cta" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.4)" />
            <stop offset="100%" stopColor="rgba(30, 64, 175, 0.3)" />
          </linearGradient>
        </defs>
        
        <path
          stroke="url(#line-gradient-cta)"
          strokeWidth="1"
          fill="none"
          d={`M-100,${150 + Math.sin(time * 0.4) * 20} Q${250 + Math.sin(time * 0.6) * 25},${140 + Math.cos(time * 0.5) * 18} ${500 + Math.sin(time * 0.3) * 22},${150 + Math.sin(time * 0.7) * 15} T${800 + Math.sin(time * 0.4) * 25},${150 + Math.cos(time * 0.6) * 18} T${1200},${150 + Math.sin(time * 0.5) * 20}`}
        />
      </svg>
    </div>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-950/30 via-blue-950/20 to-black text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-400">Join 500+ businesses</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">Ready to</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of businesses already using our AI voice agents to automate customer calls and boost conversions
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0 text-lg px-8 py-6 h-14 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
            >
              <Phone className="mr-3 h-5 w-5" />
              Start Free Trial
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400/20 bg-blue-900/10 text-white hover:bg-blue-900/20 text-lg px-8 py-6 h-14 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
            >
              <Calendar className="mr-3 h-4 w-4" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;