
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className="text-xl font-bold text-wellbeing-accent">ECHO CHAMBER BREAKER</span>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#problem" className="nav-link">Problem</a>
              <a href="#solution" className="nav-link">Solution</a>
              <a href="#features" className="nav-link">Features</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#join" className="nav-link">Join</a>
              <Button className="bg-wellbeing-accent hover:bg-blue-600 text-white">Try Extension</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-wellbeing-accent focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="#problem" className="block nav-link">Problem</a>
          <a href="#solution" className="block nav-link">Solution</a>
          <a href="#features" className="block nav-link">Features</a>
          <a href="#how-it-works" className="block nav-link">How It Works</a>
          <a href="#join" className="block nav-link">Join</a>
          <Button className="w-full mt-2 bg-wellbeing-accent hover:bg-blue-600 text-white">Try Extension</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
