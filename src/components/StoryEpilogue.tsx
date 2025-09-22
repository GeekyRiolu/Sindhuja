import { Card } from '@/components/ui/card';
import { Heart, Infinity, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoryEpilogue = () => {
  return (
    <section id="epilogue" className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-romantic-pink/10 text-romantic-pink px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles size={16} />
            Epilogue
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-romantic-pink via-romantic-cream to-romantic-blue bg-clip-text text-transparent">
            Forever & Always
          </h2>
        </div>

        <Card className="bg-gradient-to-br from-white/90 to-romantic-cream-light/90 backdrop-blur-sm border-2 border-romantic-pink/30 rounded-3xl p-12 shadow-dreamy fade-in-up mb-12">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Heart className="text-romantic-pink pulse-heart" size={32} />
              <Infinity className="text-romantic-blue" size={40} />
              <Heart className="text-romantic-pink pulse-heart" size={32} />
            </div>
            
            <div className="bg-black/90 rounded-2xl p-6 font-mono text-left max-w-2xl mx-auto mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-2 text-sm">Love Protocol - Final</span>
              </div>
              
              <div className="text-green-400 text-sm">
                <p>// Story compilation complete</p>
                <p>// Love level: Maximum</p>
                <p>// Birthday wishes: Deployed</p>
                <p className="text-romantic-pink">{'>'} while(true) {'{ love(you); }'}</p>
                <p>// Infinite loop initiated ❤️</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-romantic-pink">
                The Story Continues...
              </h3>
              
              <p className="text-xl text-foreground leading-relaxed">
                This isn't the end, my love. It's just another beautiful beginning. 
                Every day with you is a new page in our endless story, every moment 
                a new verse in our love song.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thank you for being the most incredible person in my world. 
                Thank you for your laughter, your kindness, your beautiful heart, 
                and for choosing to share your life with me.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 py-6">
              <Star className="text-romantic-blue pulse-heart" size={24} />
              <p className="text-2xl font-bold text-romantic-pink">
                Happy Birthday, My Forever Love
              </p>
              <Star className="text-romantic-blue pulse-heart" size={24} />
            </div>

            <div className="bg-gradient-to-r from-romantic-pink/10 via-romantic-cream/10 to-romantic-blue/10 rounded-2xl p-6 border border-romantic-pink/20">
              <p className="text-lg font-medium text-foreground">
                "In every universe, in every timeline, in every story ever told..."
              </p>
              <p className="text-2xl font-bold text-romantic-pink mt-2">
                I choose you. Always. 💕
              </p>
            </div>

            <div className="flex justify-center gap-2 pt-4">
              {Array(9).fill(null).map((_, i) => (
                <Heart 
                  key={i} 
                  size={20} 
                  className="text-romantic-pink pulse-heart" 
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </Card>

        <div className="fade-in-delayed">
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="lg" 
            className="bg-romantic-pink hover:bg-romantic-pink/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-floating transition-all duration-500 hover:scale-105"
          >
            <Heart className="mr-2" size={20} />
            Read Our Story Again
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Some stories are worth reading over and over again ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryEpilogue;