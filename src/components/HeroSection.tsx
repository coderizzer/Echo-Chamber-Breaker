
import { ArrowRight, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-wellbeing-neutral">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-32 h-32 left-[10%] top-[15%] animate-bubble-float"></div>
        <div className="bubble w-24 h-24 left-[30%] top-[65%] animate-bubble-float animate-delay-200"></div>
        <div className="bubble w-40 h-40 right-[15%] top-[25%] animate-bubble-float animate-delay-300"></div>
        <div className="bubble w-20 h-20 right-[25%] bottom-[20%] animate-bubble-float animate-delay-100"></div>
        <div className="bubble w-28 h-28 left-[15%] bottom-[25%] animate-bubble-float animate-delay-400"></div>
        <div className="bubble w-16 h-16 right-[40%] top-[15%] animate-bubble-float animate-delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-in">
            <span>Reclaim your feed.</span><br />
            <span className="gradient-text">Rethink your perspective.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-700 animate-fade-in animate-delay-200">
            Step outside your algorithmic bubble—see the world from all sides.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <Button className="cta-button flex items-center gap-2 text-lg">
              Try the Extension <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="secondary-button flex items-center gap-2 text-lg">
              Watch Demo <Target size={18} />
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center">
            <a href="#problem" className="flex flex-col items-center text-gray-500 hover:text-wellbeing-accent transition-colors">
              <span>Learn More</span>
              <svg className="w-6 h-6 animate-bounce mt-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
