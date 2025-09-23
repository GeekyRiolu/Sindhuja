import { useState, useEffect } from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ConfettiEffect from '@/components/ConfettiEffect';
import BalloonEffect from '@/components/BalloonEffect';
import bgImg from '../assets/WhatsApp Image 2025-09-23 at 18.57.53_7e23cd17.jpg';
import musicSrc from '../assets/you-belong-with-me.mp3';


const StoryIntroPage = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [effectTrigger, setEffectTrigger] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  // Pop confetti repeatedly for 30 seconds while on intro page
  useEffect(() => {
    if (!showConfetti) return;
    let elapsed = 0;
    const interval = setInterval(() => {
      setEffectTrigger(prev => prev + 1);
      elapsed += 3500;
      if (elapsed >= 30000) {
        clearInterval(interval);
        setShowConfetti(false);
      }
    }, 3500); // every 3.5 seconds
    return () => clearInterval(interval);
  }, [showConfetti]);

  const fullText = "> Initializing My Low IQ Database... 🧐\n> Loading memories...🤭\n> Celebrating the most beautiful person...🥰";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);



  useEffect(() => {
    // On mount, decide which effect to show
    const lastEffect = localStorage.getItem('lastEffect') || 'confetti';
    setShowConfetti(lastEffect === 'confetti');
  }, []);

  // Only one handleNavigation function should exist
  // Already declared above, so remove any duplicate

  // Remove duplicate useEffect and logic

  const handleNavigation = () => {
    const lastEffect = localStorage.getItem('lastEffect') || 'confetti';
    const nextEffect = lastEffect === 'confetti' ? 'balloon' : 'confetti';
    localStorage.setItem('lastEffect', nextEffect);
    setShowConfetti(nextEffect === 'confetti');
    setEffectTrigger(prev => prev + 1);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000', // fallback color for empty space
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* Audio player for intro song */}
      <audio
        src={musicSrc}
        autoPlay
        loop
        controls={false}
        style={{ display: 'none' }}
      />
      <audio
        src={"/assets/Love-Story.mp3"}
        autoPlay
        loop
        controls={false}
      />

      {showConfetti ? (
        <>
          {/* Left side confetti */}
          <ConfettiEffect trigger={effectTrigger} position="left" widthPercent={0.18} />
          {/* Right side confetti */}
          <ConfettiEffect trigger={effectTrigger} position="right" widthPercent={0.18} />
        </>
      ) : (
        <BalloonEffect trigger={effectTrigger} />
      )}
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-black/90 rounded-lg p-8 mb-12 font-mono text-left max-w-2xl mx-auto fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-2 text-sm">Terminal - Mistress Birthday</span>
          </div>
          <div className="text-green-400 text-sm leading-relaxed">
            <pre className="whitespace-pre-wrap">
              {displayText}
              {showCursor && <span className="bg-green-400 text-black">|</span>}
            </pre>
          </div>
        </div>
        <div className="fade-in-delayed">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-romantic-pink via-romantic-cream to-romantic-blue bg-clip-text text-transparent">
            Happy Birthday, Madam JI ❤️
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart className="text-romantic-pink pulse-heart" size={24} />
            <p className="text-3xl text-muted-foreground font-semibold">
              My Beautiful Lady 
            </p>
            <Heart className="text-romantic-pink pulse-heart" size={24} />
          </div>
          <div className="mt-12">
            <Link to="/chapter-one">
              <Button 
                onClick={handleNavigation}
                size="lg" 
                className="bg-romantic-pink hover:bg-romantic-pink/90 text-white font-semibold px-8 py-3 rounded-full shadow-floating transition-all duration-500 hover:scale-105"
              >
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryIntroPage;