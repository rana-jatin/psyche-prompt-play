import Header from "@/components/layout/Header";
import WelcomeHero from "@/components/sections/WelcomeHero";
import FeaturesPreview from "@/components/sections/FeaturesPreview";
import ChatInterface from "@/components/chat/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <WelcomeHero />
        
        {/* Interactive Chat Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Conversation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Begin chatting with your AI psychology assistant right now. Ask questions, 
                get insights, or explore your mental wellness journey.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ChatInterface />
            </div>
          </div>
        </section>

        <FeaturesPreview />
      </main>
    </div>
  );
};

export default Index;
