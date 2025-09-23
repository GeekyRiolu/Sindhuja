import { Card } from '@/components/ui/card';
import { Heart, Infinity, Star, Sparkles, ArrowLeft, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ConfettiEffect from '@/components/ConfettiEffect';
import BalloonEffect from '@/components/BalloonEffect';

const EpiloguePage = () => {
  const [effectTrigger, setEffectTrigger] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const lastEffect = localStorage.getItem('lastEffect') || 'confetti';
    setShowConfetti(lastEffect === 'confetti');
    setEffectTrigger(prev => prev + 1);
  }, []);

  const handleNavigation = () => {
    const lastEffect = localStorage.getItem('lastEffect') || 'confetti';
    const nextEffect = lastEffect === 'confetti' ? 'balloon' : 'confetti';
    localStorage.setItem('lastEffect', nextEffect);
    setShowConfetti(nextEffect === 'confetti');
    setEffectTrigger(prev => prev + 1);
  };

  return (
    <div
      className="min-h-screen py-20 px-4 flex items-center"
      style={{
        backgroundImage: "url('/assets/IMG-20250923-WA0006.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Epilogue background music */}
      <audio
        src="assets/maye-you.mp3"
        autoPlay
        loop
        controls={false}
        style={{ display: 'none' }}
      />
      {showConfetti ? (
        <ConfettiEffect trigger={effectTrigger} />
      ) : (
        <BalloonEffect trigger={effectTrigger} />
      )}
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

  <Card className="bg-white/30 backdrop-blur-xl border-2 border-romantic-pink/30 rounded-3xl p-12 shadow-dreamy fade-in-up mb-12" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.18)'}}>
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
                I know it has never been right between us, either a fight or some other reason
                that keeps us apart, I never prosposed to you properly and one time I got the chance
                to do so I didn't express my feelings ruined everything. If next time if I do get a chance
                there won't be another person involved in all of it just me & you... can't just spoil 
                everything here you have to wait a lil bit longer for all of my plans can't show you all my cards. 
              </p>
              
              <p className="text-lg text-white leading-relaxed">
                Thank you for being the most incredible person in my world. 
                Thank you for your laughter, your kindness, your beautiful heart, 
                and for choosing to share your life with me.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 py-6">
              <Star className="text-romantic-blue pulse-heart" size={24} />
              <p className="text-2xl font-bold text-romantic-pink">
                Happy Birthday, My Love
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

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 fade-in-delayed">
          
          <Link to="/">
            <Button 
              onClick={handleNavigation}
              size="lg" 
              className="bg-romantic-pink hover:bg-romantic-pink/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-floating transition-all duration-500 hover:scale-105"
            >
              <RotateCcw className="mr-2" size={20} />
              Read Our Story Again
            </Button>
          </Link>
        </div>
        
        
      </div>
    </div>
  );
};

export default EpiloguePage;