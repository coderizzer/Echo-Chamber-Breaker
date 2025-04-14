
import { Activity, Brain, GitBranch, MessageCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Activity className="h-8 w-8 text-wellbeing-accent" />,
      title: "Analyzes Your Feed",
      description: "The extension scans your social media content using advanced NLP algorithms to detect patterns and bias."
    },
    {
      icon: <Brain className="h-8 w-8 text-wellbeing-accent" />,
      title: "Identifies Echo Chambers",
      description: "It identifies when your content consumption becomes too one-sided or lacks diverse perspectives."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-wellbeing-accent" />,
      title: "Suggests Alternatives",
      description: 'Gently nudges you with suggestions: "Want a new take on this topic?" when detecting echo chamber patterns.'
    },
    {
      icon: <GitBranch className="h-8 w-8 text-wellbeing-accent" />,
      title: "Tracks Your Growth",
      description: "Monitors your Perspective Score over time, showing how your content consumption is becoming more balanced."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Simple. Subtle. Smart.</h2>
          <p className="text-lg text-gray-600">
            Echo Chamber Breaker works seamlessly in the background,
            helping you develop a more balanced perspective without disrupting your browsing experience.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-wellbeing-blue -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="feature-card text-center">
                <div className="mx-auto bg-wellbeing-blue rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 text-wellbeing-accent font-bold text-lg">
                  Step {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
