
import { Brain, Lock, MessageSquare, PieChart, Trophy } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-wellbeing-accent" />,
      title: "Bias Detector",
      description: "Advanced NLP algorithms identify bias patterns and one-sided perspectives in your content feed."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-wellbeing-accent" />,
      title: "Conversation Nudger",
      description: "Gentle prompts that suggest alternative viewpoints without being intrusive."
    },
    {
      icon: <PieChart className="h-10 w-10 text-wellbeing-accent" />,
      title: "Feed Diversity Score",
      description: "Track the diversity of perspectives in your daily content consumption with visual analytics."
    },
    {
      icon: <Trophy className="h-10 w-10 text-wellbeing-accent" />,
      title: "Perspective Badges",
      description: "Earn badges as you broaden your perspective and engage with diverse viewpoints."
    },
    {
      icon: <Lock className="h-10 w-10 text-wellbeing-accent" />,
      title: "100% Privacy-First",
      description: "All analysis happens locally on your device. Your data never leaves your browser."
    }
  ];

  return (
    <section id="features" className="py-20 bg-wellbeing-green/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What You'll Get</h2>
          <p className="text-lg text-gray-600">
            Echo Chamber Breaker comes packed with features designed to help you discover diverse perspectives
            and break free from your information bubble.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card hover:bg-wellbeing-blue/10 transition-colors duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
