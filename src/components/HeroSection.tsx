
import { ArrowRight, Phone, Play, Star } from "lucide-react";
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
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-950/20"></div>
      
      {/* Animated wave lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" /> {/* blue-500 */}
            <stop offset="50%" stopColor="rgba(37, 99, 235, 0.7)" /> {/* blue-600 */}
            <stop offset="100%" stopColor="rgba(30, 64, 175, 0.5)" /> {/* blue-800 */}
          </linearGradient>
        </defs>
        
        <path
          stroke="url(#line-gradient-1)"
          strokeWidth="2"
          fill="none"
          d={`M-200,${400 + Math.sin(time * 0.8) * 30} Q${300 + Math.sin(time * 0.5) * 40},${380 + Math.cos(time * 0.7) * 30} ${700 + Math.sin(time * 0.3) * 30},${400 + Math.sin(time * 0.6) * 25} T${1300 + Math.sin(time * 0.4) * 35},${400 + Math.cos(time * 0.5) * 20} T${1900},${400 + Math.sin(time * 0.7) * 30}`}
        />
      </svg>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-12 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">AI-powered voice automation</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
            <span className="text-white">Never Miss a</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Customer Call
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            AI voice agents that handle your inbound calls 24/7, qualify leads, book appointments, and convert prospects into customers while you focus on growing your business.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0 text-lg px-8 py-6 h-16 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
            >
              <Phone className="mr-3 h-5 w-5" />
              Book a Demo
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400/20 bg-blue-900/10 text-white hover:bg-blue-900/20 text-lg px-8 py-6 h-16 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
            >
              <Play className="mr-3 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Trusted by 500+ businesses</span>
            </div>
            
            <div className="grid grid-cols-3 gap-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-400">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-sm text-gray-400">Lead Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">3x</div>
                <div className="text-sm text-gray-400">Faster Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;