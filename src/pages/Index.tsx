import StoryNavigation from '@/components/StoryNavigation';
import StoryIntro from '@/components/StoryIntro';
import ChapterOne from '@/components/ChapterOne';
import ChapterTwo from '@/components/ChapterTwo';
import ChapterThree from '@/components/ChapterThree';
import StoryEpilogue from '@/components/StoryEpilogue';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-background via-romantic-cream-light/30 to-background">
      {/* Story Navigation */}
      <StoryNavigation />
      
      {/* Story Chapters */}
      <div className="relative z-10">
        <StoryIntro />
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <StoryEpilogue />
      </div>
    </div>
  );
};

export default Index;
