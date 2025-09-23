import { Card } from '@/components/ui/card';
import { ImageIcon, Heart, Camera, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ConfettiEffect from '@/components/ConfettiEffect';
import BalloonEffect from '@/components/BalloonEffect';

const ChapterTwoPage = () => {
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
        backgroundImage: "url('/assets/WhatsApp Image 2025-09-23 at 22.43.50_826d0a06.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background music: You Belong With Me */}
      <audio
        src="/assets/you-belong-with-me.mp3"
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
          <div className="inline-flex items-center gap-2 bg-romantic-blue/10 text-romantic-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera size={16} />
            Chapter II
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Our Beautiful Memories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every moment with you is a treasure, every memory a masterpiece...
          </p>
        </div>

        <div className="bg-black/70 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-romantic-pink/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-romantic-pink mb-4">
              // Loading Memory Archive...
            </h3>
            <div className="flex justify-center gap-1 mb-4">
              {Array(20).fill(null).map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-1 bg-romantic-pink/30 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <p className="text-white">
              Retrieving the most precious moments of our journey together...
            </p>
          </div>
        </div>

        {/* Photo Collage Layout */}
        <div className="relative fade-in-up">
          <div className="grid grid-cols-6 grid-rows-4 gap-4 h-[600px] md:h-[700px] lg:h-[800px]">
            <Card className="col-span-2 row-span-1 overflow-hidden rounded-2xl shadow-soft hover:shadow-floating transition-all duration-500 group">
              <img src="/assets/WhatsApp Image 2025-09-23 at 22.52.56_07e72197.jpg" alt="Memory 6" className="object-cover w-full h-full" />
            </Card>
            <Card className="col-span-2 row-span-1 overflow-hidden rounded-2xl shadow-soft hover:shadow-floating transition-all duration-500 group">
              <img src="/assets/WhatsApp Image 2025-09-23 at 22.53.15_3bd408fd.jpg" alt="Memory 7" className="object-cover w-full h-full" />
            </Card>
            {/* Collage with real images */}
            <Card className="col-span-2 row-span-2 overflow-hidden rounded-3xl shadow-soft hover:shadow-floating transition-all duration-500 group">
              <img src="/assets/IMG-20250923-WA0005.jpg" alt="Memory 1" className="object-cover w-full h-full" />
            </Card>
            <Card className="col-span-2 row-span-1 overflow-hidden rounded-2xl shadow-soft hover:shadow-floating transition-all duration-500 group">
              <img src="/assets/IMG-20250923-WA0006.jpg" alt="Memory 2" className="object-cover w-full h-full" />
            </Card>
            <Card className="col-span-2 row-span-3 overflow-hidden rounded-3xl shadow-soft hover:shadow-floating transition-all duration-500 group">
              <img src="/assets/IMG-20250923-WA0007.jpg" alt="Memory 3" className="object-cover w-full h-full" />
            </Card>
            <Card className="col-span-1 row-span-1 overflow-hidden rounded-2xl shadow-soft hover:shadow-floating transition-all duration-500 group">
              <img src="/assets/IMG-20250923-WA0008.jpg" alt="Memory 4" className="object-cover w-full h-full" />
            </Card>
            <Card className="col-span-1 row-span-1 overflow-hidden rounded-2xl shadow-soft hover:shadow-floating transition-all duration-500 group">
              <img src="/assets/IMG-20250923-WA0009.jpg" alt="Memory 5" className="object-cover w-full h-full" />
            </Card>
          </div>
        </div>

          {/* Glassmorphism story section */}
          <div className="bg-gradient-to-r from-white/40 via-white/30 to-white/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl text-black mt-12">
            <h3 className="text-2xl content-center font-bold text-romantic-pink mb-4">
              "Each photo tells our story..."
            </h3>
            <p className="text-lg text-black font-semibold leading-relaxed max-w-2xl mx-auto">
              I know I don't have the old photos of us being together the time we spent together but they're present with me always in my part of a brain where we loved going out randomly, just didn't give a fuck abt anyone else arnd moving around while it rains being playful, but things that I still have I hold them very much against my heart...🥰 
              And I am just I don't know "HAPPY" that you came back in my life. This tiem I not gonna let go of you... cuz I am that I one of a jealous don't wanna see my woman with anyone else 🥰
            </p>
          </div>

        

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 fade-in-up">
          <Link to="/chapter-one">
            <Button 
              onClick={handleNavigation}
              variant="outline" 
              size="lg"
              className="bg-white/50 border-romantic-pink/30 hover:bg-romantic-pink/10"
            >
              <ArrowLeft className="mr-2" size={20} />
              Previous Chapter
            </Button>
          </Link>
          <Link to="/epilogue">
            <Button 
              size="lg" 
              className="bg-romantic-pink hover:bg-romantic-pink/90 text-white font-semibold px-8 py-3 rounded-full shadow-floating transition-all duration-500 hover:scale-105"
            >
              Epilogue
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChapterTwoPage;