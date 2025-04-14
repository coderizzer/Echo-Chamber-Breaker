
import { BarChart, PieChart } from "@/components/ui/chart";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const ScoreCardSection = () => {
  const pieData = [
    { name: "Progressive", value: 35, fill: "#3498db" },
    { name: "Conservative", value: 25, fill: "#e74c3c" },
    { name: "Neutral", value: 40, fill: "#2ecc71" },
  ];
  
  const barData = [
    { name: "Week 1", score: 42 },
    { name: "Week 2", score: 53 },
    { name: "Week 3", score: 58 },
    { name: "Week 4", score: 67 },
    { name: "Week 5", score: 72 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">See Your Echo Score</h2>
          <p className="text-lg text-gray-600">
            Track your progress and see how your perspective broadens over time with 
            our intuitive visualization tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <Card className="p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Your Content Distribution</h3>
            <div className="h-64">
              <PieChart 
                data={pieData}
                innerRadius={70}
                outerRadius={100}
                cx="50%"
                cy="50%"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              />
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Your feed shows a good balance of perspectives with a slight progressive lean.
              </p>
            </div>
          </Card>
          
          <Card className="p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Your Weekly Progress</h3>
              <div className="flex items-center text-green-500">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+18% from start</span>
              </div>
            </div>
            <div className="h-64">
              <BarChart 
                data={barData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                xAxisDataKey="name"
                bars={[
                  { dataKey: "score", fill: "#1EAEDB" }
                ]}
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  You're <span className="font-semibold text-wellbeing-accent">18%</span> more balanced than when you started!
                </p>
                <button className="text-wellbeing-accent flex items-center text-sm font-medium">
                  View Details <ArrowUpRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 bg-wellbeing-blue rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-white rounded-full p-3 mb-4 md:mb-0 md:mr-6">
              <Trophy className="h-8 w-8 text-wellbeing-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Your Current Level: Bridge Builder</h3>
              <p className="text-gray-600">
                You've made great progress! Complete today's challenge: 
                "Read 3 articles with different perspectives on climate policy" to level up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoreCardSection;
