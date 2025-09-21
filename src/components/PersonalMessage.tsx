import { Card } from '@/components/ui/card';
import { Heart, Star, Sparkles } from 'lucide-react';

const PersonalMessage = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-white/90 to-romantic-cream-light/90 backdrop-blur-sm border-2 border-romantic-pink/30 rounded-3xl p-8 md:p-12 shadow-dreamy fade-in-up">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-romantic-blue pulse-heart" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold text-romantic-pink">
                A Message From My Heart
              </h2>
              <Sparkles className="text-romantic-blue pulse-heart" size={24} />
            </div>
          </div>
          
          <div className="space-y-6 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex gap-2">
                {Array(5).fill(null).map((_, i) => (
                  <Heart 
                    key={i}
                    size={20} 
                    className="text-romantic-pink pulse-heart" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              My dearest love, on this special day, I want you to know how incredibly grateful I am 
              to have you in my life. You are my sunshine on cloudy days, my comfort when I need it most, 
              and my greatest joy every single day.
            </p>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Your smile lights up my world, your laugh is my favorite sound, and your love is the 
              greatest gift I could ever receive. I hope this new year of your life brings you all 
              the happiness, love, and beautiful moments you deserve.
            </p>
            
            <div className="pt-6">
              <div className="flex justify-center mb-4">
                <Star className="text-romantic-blue pulse-heart" size={32} />
              </div>
              <p className="text-xl md:text-2xl font-semibold text-romantic-pink">
                Happy Birthday, Beautiful! 🎂✨
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                Forever yours, with all my love 💕
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PersonalMessage;