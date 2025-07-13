import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Founder, Morado Development",
    quote: "Blade AI has transformed our customer support. The AI voice agents are incredibly natural and have saved us countless hours!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    company: "Morado Development"
  },
  {
    name: "Priya Patel",
    title: "COO, Al-Afif Perfumes",
    quote: "We never miss a lead now. The 24/7 AI call handling is a game changer for our business.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    company: "Al-Afif Perfumes"
  },
  {
    name: "Michael Chen",
    title: "Head of Sales, FinEdge",
    quote: "The onboarding was seamless and the results were immediate. Our conversion rate jumped by 30%.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    company: "FinEdge"
  },
  {
    name: "Sarah Williams",
    title: "Marketing Director, GrowthLab",
    quote: "The AI understands context perfectly. Our customers can't tell the difference between AI and human agents.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    company: "GrowthLab"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-blue-950/30 text-white overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real results from real businesses using Blade AI to automate and elevate their customer experience.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative w-full">
          <div className="overflow-visible py-8">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {/* Create enough testimonials to show 3 at once */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => {
                // Calculate which position this card is in relative to the viewport
                const adjustedIndex = index - currentIndex;
                const isCenter = adjustedIndex === 1; // Middle card of the 3 visible cards
                const isAdjacent = adjustedIndex === 0 || adjustedIndex === 2; // Left and right cards
                
                return (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className={`transition-all duration-700 ease-out ${
                      isCenter 
                        ? 'bg-white/10 border-white/20 scale-110 shadow-2xl shadow-blue-500/30 z-10' 
                        : isAdjacent 
                        ? 'bg-white/5 border-white/10 scale-95 opacity-70' 
                        : 'bg-white/3 border-white/5 scale-90 opacity-40'
                    } border rounded-2xl p-8 md:p-10 shadow-lg shadow-blue-900/10 hover:shadow-blue-500/20 backdrop-blur-sm relative`}>
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 fill-current mx-1 transition-all duration-700 ${
                            isCenter ? 'text-blue-400' : 'text-blue-400/50'
                          }`} />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className={`text-lg italic mb-6 text-center leading-relaxed transition-all duration-700 ${
                        isCenter ? 'text-blue-100' : 'text-blue-100/60'
                      }`}>
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className={`w-16 h-16 rounded-full shadow-md transition-all duration-700 ${
                            isCenter 
                              ? 'border-4 border-blue-500' 
                              : 'border-4 border-blue-500/50'
                          }`}
                        />
                        <div className="text-center">
                          <div className={`font-semibold transition-all duration-700 ${
                            isCenter ? 'text-blue-300' : 'text-blue-300/60'
                          }`}>{testimonial.name}</div>
                          <div className={`text-sm transition-all duration-700 ${
                            isCenter ? 'text-blue-500' : 'text-blue-500/60'
                          }`}>{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group z-10"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-blue-400 animate-pulse' : 'bg-gray-500'}`}></div>
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;