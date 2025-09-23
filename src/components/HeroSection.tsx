import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-romantic-pink via-romantic-cream to-romantic-blue bg-clip-text text-transparent leading-tight">
            Happy Birthday
          </h1>
        </div>
        
        <div className="fade-in-delayed">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart className="text-romantic-pink pulse-heart" size={32} />
            <h2 className="text-2xl md:text-4xl text-romantic-pink font-semibold">
              My Beautiful Love
            </h2>
            <Heart className="text-romantic-pink pulse-heart" size={32} />
          </div>
        </div>
        
        <div className="fade-in-delayed">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Today is all about celebrating you, the most wonderful person in my world. 
            You bring so much joy, love, and light into every day. ✨
          </p>
        </div>

        <div className="fade-in-delayed">
          <Button 
            size="lg" 
            className="bg-romantic-pink hover:bg-romantic-pink/90 text-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-floating transition-all duration-500 hover:scale-105"
          >
            <Heart className="mr-2" size={20} />
            Scroll for More Love
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;