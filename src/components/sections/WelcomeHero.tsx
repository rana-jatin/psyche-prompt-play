import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WelcomeHero = () => {
  return (
    <section className="relative py-20 gradient-calm overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 hover-lift">
            <Sparkles className="h-4 w-4" />
            AI-Powered Psychology Hub
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Welcome to MindMate
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Your personal AI-powered psychological assistant for mental wellness, 
            personality insights, and interactive learning experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gradient-primary hover-glow text-lg px-8 py-6">
              Start Chatting
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-lift">
              Explore Features
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 hover-lift bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Safe & Confidential</h3>
              <p className="text-sm text-muted-foreground">
                Your conversations are secure and private, creating a safe space for exploration.
              </p>
            </Card>

            <Card className="p-6 hover-lift bg-card/50 backdrop-blur-sm border-accent/20">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-sm text-muted-foreground">
                Advanced AI provides personalized psychological insights and guidance.
              </p>
            </Card>

            <Card className="p-6 hover-lift bg-card/50 backdrop-blur-sm border-secondary/20">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Mental Wellness</h3>
              <p className="text-sm text-muted-foreground">
                Tools and resources to support your mental health and personal growth.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;