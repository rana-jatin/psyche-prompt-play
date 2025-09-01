import { BookOpen, Puzzle, BarChart3, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturesPreview = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Psychological Q&A",
      description: "Take scientifically-backed personality tests and psychological assessments to better understand yourself.",
      color: "primary",
      comingSoon: false,
    },
    {
      icon: Puzzle,
      title: "Interactive Games", 
      description: "Engaging psychological games that provide insights into your behavior and decision-making patterns.",
      color: "accent",
      comingSoon: true,
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your mental wellness journey with detailed analytics and personalized recommendations.",
      color: "secondary",
      comingSoon: true,
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with others on similar journeys in a safe, moderated community environment.",
      color: "primary",
      comingSoon: true,
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Psychology Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our suite of AI-powered tools designed to support your mental wellness 
            and psychological understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary border-primary/20",
              accent: "bg-accent/10 text-accent border-accent/20", 
              secondary: "bg-secondary/10 text-secondary border-secondary/20",
            };

            return (
              <Card
                key={index}
                className={`p-6 hover-lift relative overflow-hidden ${
                  feature.comingSoon ? 'opacity-75' : ''
                }`}
              >
                {feature.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full font-medium">
                      Coming Soon
                    </span>
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    colorClasses[feature.color as keyof typeof colorClasses]
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <Button
                  variant={feature.comingSoon ? "ghost" : "outline"}
                  size="sm"
                  className="w-full"
                  disabled={feature.comingSoon}
                >
                  {feature.comingSoon ? "Coming Soon" : "Explore"}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;