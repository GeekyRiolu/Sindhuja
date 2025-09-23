import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ConfettiEffect from '@/components/ConfettiEffect';
import BalloonEffect from '@/components/BalloonEffect';

const ChapterOnePage = () => {
  // Play invisible-string.mp3 as background music
  // Only one audio element per page for background music
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
      className="min-h-screen py-20 px-4"
      style={{
        backgroundImage: "url('src/assets/Gemini_Generated_Image_uq5c8quq5c8quq5c.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        {/* Invisible String background music */}
        <audio
          src={"/assets/invisible-string.mp3"}
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
  <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-romantic-pink/10 text-romantic-pink px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star size={16} />
            Chapter I
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            The Day You Were Born
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The universe conspired to create something extraordinary...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <Card className="bg-romantic-pink/60 backdrop-blur-lg border border-romantic-pink/30 rounded-3xl p-8 shadow-xl text-black transition-colors duration-300 hover:bg-romantic-pink/80">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-romantic-pink/20 rounded-full">
                    <Calendar className="text-romantic-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">The Special Date: 24 September</h3>
                    <p className="text-black font-semibold">A day that changed everything</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-romantic-blue/20 rounded-full">
                    <Clock className="text-romantic-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Perfect Timing</h3>
                    <p className="text-black font-semibold">I don't know if it was fate or just perfect timing, but my life truly began the day I met you</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-romantic-cream/20 rounded-full">
                    <MapPin className="text-romantic-cream" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Where Dreams Begin</h3>
                    <p className="text-black font-semibold">
                      With you, I stopped wishing for dreams to come true, because my reality is now more beautiful than any dream I could ever imagine
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8 fade-in-delayed">
            <div className="bg-romantic-pink/60 backdrop-blur-lg border border-romantic-pink/30 rounded-3xl p-8 shadow-xl text-black">
              <h3 className="text-2xl font-bold text-white mb-4">
                "And then there was you..."
              </h3>
              <p className="text-lg text-black font-semibold leading-relaxed">
                Most precious thing that I hold against the whole world... for your family you're Anni, for your friends you're Sindhuja
                and I don't know how the world sees you but you're the most beautiful soul helping other while you're in the need of help
                itself, for me you're just everything... you're my whole world, you will always that "piddi ldki" who has forgiven each & every mistake
                of mine doesn't matter how many times I have repeated those mistakes.
              </p>
            </div>

            <div className="bg-romantic-pink/60 backdrop-blur-lg border border-romantic-pink/30 rounded-3xl p-8 shadow-xl text-black transition-colors duration-300 hover:bg-romantic-pink/80">
              <h3 className="text-2xl font-bold text-white mb-4">
                Careless Dumbo...
              </h3>
              <p className="text-lg text-black font-semibold leading-relaxed">
                Yes, you're my careless dumbo. The one who bumps into doorways and forgets the little things. But I think it's because your heart is too busy being kind, your mind too full of dreams, to worry about the small stuff. I wouldn't trade your beautiful, forgetful, clumsy self for anything. You may be careless with things, but you have carefully and completely stolen my heart.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 fade-in-up">
          <Link to="/">
            <Button 
              onClick={handleNavigation}
              variant="outline" 
              size="lg"
              className="bg-white/50 border-romantic-pink/30 hover:bg-romantic-pink/10"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Intro
            </Button>
          </Link>
          
          <Link to="/chapter-two">
            <Button 
              onClick={handleNavigation}
              size="lg" 
              className="bg-romantic-pink hover:bg-romantic-pink/90 text-black font-semibold px-8 py-3 rounded-full shadow-floating transition-all duration-500 hover:scale-105"
            >
              Our Memories
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChapterOnePage;