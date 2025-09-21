import FloatingElements from '@/components/FloatingElements';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import PersonalMessage from '@/components/PersonalMessage';
import BirthdayWishes from '@/components/BirthdayWishes';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Floating animated elements */}
      <FloatingElements />
      
      {/* Main content sections */}
      <div className="relative z-10">
        <HeroSection />
        <PhotoGallery />
        <PersonalMessage />
        <BirthdayWishes />
        
        {/* Final loving message */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-romantic-pink mb-4">
              I Love You More Every Day 💕
            </h3>
            <p className="text-lg text-muted-foreground">
              Thank you for being the most amazing person in my life. 
              Here's to another year of love, laughter, and beautiful memories together!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
