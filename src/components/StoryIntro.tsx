import { useState, useEffect } from 'react';
import { Heart, ArrowDown } from 'lucide-react';

const StoryIntro = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "// Initializing Love Story Database...\n// Loading memories...\n// Celebrating the most beautiful person...\n\n> Happy Birthday, My Love ❤️";

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
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-black/90 rounded-lg p-8 mb-12 font-mono text-left max-w-2xl mx-auto fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-2 text-sm">Terminal - Love Story</span>
          </div>
          
          <div className="text-green-400 text-sm leading-relaxed">
            <pre className="whitespace-pre-wrap">
              {displayText}
              {showCursor && <span className="bg-green-400 text-black">|</span>}
            </pre>
          </div>
        </div>

        <div className="fade-in-delayed">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-romantic-pink via-romantic-cream to-romantic-blue bg-clip-text text-transparent">
            A Love Story
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart className="text-romantic-pink pulse-heart" size={24} />
            <p className="text-xl text-muted-foreground">
              Written in the stars, coded with love
            </p>
            <Heart className="text-romantic-pink pulse-heart" size={24} />
          </div>

          <div className="animate-bounce mt-12">
            <ArrowDown className="mx-auto text-romantic-pink" size={32} />
            <p className="text-sm text-muted-foreground mt-2">Scroll to begin the story</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryIntro;