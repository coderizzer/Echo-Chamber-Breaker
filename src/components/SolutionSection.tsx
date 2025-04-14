
import { Brain, GitBranch, PieChart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-wellbeing-neutral">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Meet Echo Chamber Breaker</h2>
          <p className="text-lg text-gray-600">
            A smart browser extension designed to help you break free from your algorithmic bubble 
            and discover diverse perspectives online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-1">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-500">
                  Echo Chamber Breaker v1.0
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-wellbeing-blue p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Your Echo Score</span>
                    <span className="text-wellbeing-accent font-semibold">72/100</span>
                  </div>
                  <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-wellbeing-accent h-full rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <GitBranch className="h-5 w-5 text-orange-500" />
                      </div>
                      <span className="ml-3 text-gray-700">Perspective Nudge</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      View Alternative
                    </Button>
                  </div>
                  <p className="mt-3 text-gray-500 text-sm">
                    This article has a strong political leaning. Want to see different takes?
                  </p>
                </div>
                
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <PieChart className="h-5 w-5 text-wellbeing-accent" />
                    <span className="ml-2 text-sm text-gray-600">Feed Diversity: Improving</span>
                  </div>
                  <span className="text-green-500 text-sm">+12% this week</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-wellbeing-blue p-3 rounded-full mr-4">
                  <Search className="h-6 w-6 text-wellbeing-accent" />
                </div>
                <h3 className="text-xl font-semibold">Smart feed analysis</h3>
              </div>
              <p className="text-gray-600 pl-16">
                Analyzes content using natural language processing to detect ideological patterns 
                and bias in your social media feeds.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-wellbeing-blue p-3 rounded-full mr-4">
                  <GitBranch className="h-6 w-6 text-wellbeing-accent" />
                </div>
                <h3 className="text-xl font-semibold">Gentle perspective nudges</h3>
              </div>
              <p className="text-gray-600 pl-16">
                Suggests alternative viewpoints without disrupting your browsing experience, 
                allowing you to broaden your perspective at your own pace.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-wellbeing-blue p-3 rounded-full mr-4">
                  <Brain className="h-6 w-6 text-wellbeing-accent" />
                </div>
                <h3 className="text-xl font-semibold">Personal growth tracking</h3>
              </div>
              <p className="text-gray-600 pl-16">
                Monitor your progress with the Perspective Score that tracks how your 
                content consumption evolves over time.
              </p>
            </div>
            
            <div className="mt-8">
              <Button className="cta-button" asChild>
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
