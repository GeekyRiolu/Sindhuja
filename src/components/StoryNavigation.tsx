import { useState, useEffect } from 'react';
import { Heart, BookOpen, Star, Gift, Sparkles } from 'lucide-react';
import ConfettiEffect from './ConfettiEffect';

const StoryNavigation = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  const chapters = [
    { id: 'intro', title: 'Prologue', icon: BookOpen, description: 'Our story begins...' },
    { id: 'chapter1', title: 'Chapter I', icon: Heart, description: 'The Day You Were Born' },
    { id: 'chapter2', title: 'Chapter II', icon: Star, description: 'Our Beautiful Memories' },
    { id: 'chapter3', title: 'Chapter III', icon: Gift, description: 'Birthday Wishes' },
    { id: 'epilogue', title: 'Epilogue', icon: Sparkles, description: 'Forever & Always' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = chapters.map(chapter => document.getElementById(chapter.id));
      const scrollY = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            if (currentChapter !== index) {
              setCurrentChapter(index);
              setConfettiTrigger(prev => prev + 1);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setConfettiTrigger(prev => prev + 1);
    }
  };

  return (
    <>
      <ConfettiEffect trigger={confettiTrigger} />
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm border border-romantic-pink/20 rounded-full px-6 py-3 shadow-soft">
      <div className="flex items-center gap-4">
        {chapters.map((chapter, index) => {
          const Icon = chapter.icon;
          const isActive = currentChapter === index;
          
          return (
            <button
              key={chapter.id}
              onClick={() => scrollToChapter(chapter.id)}
              className={`group relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-romantic-pink text-white shadow-md' 
                  : 'text-muted-foreground hover:text-romantic-pink hover:bg-romantic-pink/10'
              }`}
              title={`${chapter.title}: ${chapter.description}`}
            >
              <Icon size={16} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
              <span className="hidden md:block text-sm font-medium">{chapter.title}</span>
              
              {isActive && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-romantic-pink text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-90">
                  {chapter.description}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-romantic-pink rotate-45"></div>
                </div>
              )}
            </button>
          );
        })}
      </div>
      </nav>
    </>
  );
};

export default StoryNavigation;