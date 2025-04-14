
import { Gauge, Shield, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">We're Stuck in Loops</h2>
          <p className="text-lg text-gray-600 mb-8">
            Social media platforms use complex algorithms that personalize content based on your behavior, 
            creating comfortable but limiting information bubbles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="bg-wellbeing-blue p-3 rounded-full">
                <Gauge className="h-6 w-6 text-wellbeing-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Algorithmic Filtering</h3>
                <p className="text-gray-600">
                  Social media shows what we already believe, reinforcing our existing worldviews and limiting exposure to diverse perspectives.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-wellbeing-blue p-3 rounded-full">
                <Users className="h-6 w-6 text-wellbeing-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Increasing Polarization</h3>
                <p className="text-gray-600">
                  Algorithmic bubbles lead to increased polarization and spread of misinformation as we become disconnected from opposing viewpoints.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-wellbeing-blue p-3 rounded-full">
                <Shield className="h-6 w-6 text-wellbeing-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Limited Perspective</h3>
                <p className="text-gray-600">
                  <span className="highlight-text">64% of users</span> say they rarely see opposing viewpoints in their feeds, creating a narrow understanding of complex issues.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border-8 border-wellbeing-blue opacity-70"></div>
              </div>
              <div className="absolute left-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <Card className="rounded-lg p-4 shadow-lg bg-white border-wellbeing-blue border-2">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-500 text-2xl">A</span>
                  </div>
                </Card>
              </div>
              <div className="absolute right-1/4 top-1/4 transform translate-x-1/2 -translate-y-1/2">
                <Card className="rounded-lg p-4 shadow-lg bg-white border-wellbeing-blue border-2">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-500 text-2xl">B</span>
                  </div>
                </Card>
              </div>
              <div className="absolute left-1/4 bottom-1/4 transform -translate-x-1/2 translate-y-1/2">
                <Card className="rounded-lg p-4 shadow-lg bg-white border-wellbeing-blue border-2">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-500 text-2xl">C</span>
                  </div>
                </Card>
              </div>
              <div className="absolute right-1/4 bottom-1/4 transform translate-x-1/2 translate-y-1/2">
                <Card className="rounded-lg p-4 shadow-lg bg-white border-wellbeing-blue border-2">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-500 text-2xl">D</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
