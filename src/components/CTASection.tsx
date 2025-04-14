
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  return (
    <section id="join" className="py-20 bg-wellbeing-accent text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Break the Echo?</h2>
          <p className="text-xl opacity-90">
            Join thousands of users who are breaking out of their algorithm bubbles 
            and discovering a broader perspective online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Download className="h-6 w-6 mr-3" />
              <h3 className="text-2xl font-semibold">Get the Extension</h3>
            </div>
            <p className="text-white/80 mb-6">
              Download the Echo Chamber Breaker extension for your browser and start 
              breaking free from your algorithm bubble today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-wellbeing-accent hover:bg-gray-100 transition-colors">
                Chrome Extension
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 transition-colors">
                Firefox Add-on
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 mr-3" />
              <h3 className="text-2xl font-semibold">Stay Updated</h3>
            </div>
            <p className="text-white/80 mb-6">
              Join our newsletter to receive updates, get early access to new features, 
              and tips for maintaining a balanced digital diet.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
              />
              <Button className="bg-white text-wellbeing-accent hover:bg-gray-100 whitespace-nowrap flex items-center gap-1">
                Subscribe <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
