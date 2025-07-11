import { Phone, Bot, Zap, CheckCircle, Clock, Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-blue-950/10"></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle wave effect */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(30, 64, 175, 0.1)" />
          </linearGradient>
        </defs>
        
        <path
          stroke="url(#bg-gradient)"
          strokeWidth="1"
          fill="none"
          d={`M-100,${200 + Math.sin(time * 0.5) * 20} Q${400 + Math.sin(time * 0.3) * 30},${180 + Math.cos(time * 0.4) * 20} ${900 + Math.sin(time * 0.2) * 25},${200 + Math.sin(time * 0.6) * 15} T${1400},${200 + Math.cos(time * 0.3) * 20}`}
        />
      </svg>
    </div>
  );
};

const HowItWorksSection = () => {
  const roadmapSteps = [
    {
      id: 1,
      phase: "Initial Contact",
      title: "Customer Calls",
      description: "Customer dials your business number during or after hours",
      icon: Phone,
      color: "from-green-500 to-green-700",
      details: [
        "Instant pickup within 2 rings",
        "Professional greeting with your brand",
        "No busy signals or voicemail"
      ],
      timing: "0-3 seconds"
    },
    {
      id: 2,
      phase: "AI Engagement",
      title: "Natural Conversation",
      description: "AI agent engages with human-like conversation flow",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-700",
      details: [
        "Understands context and intent",
        "Asks clarifying questions",
        "Handles multiple languages"
      ],
      timing: "3-30 seconds"
    },
    {
      id: 3,
      phase: "Information Gathering",
      title: "Needs Assessment",
      description: "AI collects relevant information and qualifies the lead",
      icon: Bot,
      color: "from-purple-500 to-purple-700",
      details: [
        "Identifies customer pain points",
        "Gathers contact information",
        "Assesses budget and timeline"
      ],
      timing: "30 seconds - 2 minutes"
    },
    {
      id: 4,
      phase: "Smart Routing",
      title: "Intelligent Processing",
      description: "AI analyzes customer needs and determines best action",
      icon: Zap,
      color: "from-orange-500 to-orange-700",
      details: [
        "Categorizes inquiry type",
        "Checks team availability",
        "Prioritizes based on urgency"
      ],
      timing: "1-5 seconds"
    },
    {
      id: 5,
      phase: "Action & Follow-up",
      title: "Conversion & Scheduling",
      description: "AI takes immediate action to convert the opportunity",
      icon: Calendar,
      color: "from-emerald-500 to-emerald-700",
      details: [
        "Books appointments instantly",
        "Sends confirmation emails",
        "Triggers follow-up sequences"
      ],
      timing: "30 seconds - 1 minute"
    },
    {
      id: 6,
      phase: "Results & Analytics",
      title: "Performance Tracking",
      description: "Real-time insights and continuous optimization",
      icon: TrendingUp,
      color: "from-pink-500 to-pink-700",
      details: [
        "Call transcripts and recordings",
        "Conversion rate analytics",
        "AI performance improvements"
      ],
      timing: "Ongoing"
    }
  ];

  return (
    <div id="how-it-works" className="py-24 px-6 bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            How It{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            From first ring to final conversion, our AI voice agents handle every step of the customer journey with precision and professionalism
          </p>
        </div>

        {/* Roadmap */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {roadmapSteps.map((step, index) => (
              <div key={step.id} className="relative group">
                {/* Connecting line for desktop */}
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="relative bg-gradient-to-br from-white/8 to-white/2 border border-white/10 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/12 hover:to-white/4 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm">
                  {/* Step number and timing */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.id}
                      </div>
                      <span className="text-blue-400 text-sm font-medium">{step.phase}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {step.timing}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">&lt; 2s</div>
            <div className="text-sm text-gray-400">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-sm text-gray-400">Call Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">85%</div>
            <div className="text-sm text-gray-400">Lead Conversion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;