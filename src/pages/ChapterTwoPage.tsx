import { Card } from '@/components/ui/card';
import { ImageIcon, Heart, Camera, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConfettiEffect from '@/components/ConfettiEffect';

const ChapterTwoPage = () => {
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  const handleNavigation = () => {
    setConfettiTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-background via-romantic-cream-light/30 to-background">
      <ConfettiEffect trigger={confettiTrigger} />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-romantic-blue/10 text-romantic-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera size={16} />
            Chapter II
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Our Beautiful Memories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every moment with you is a treasure, every memory a masterpiece...
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/50 to-romantic-cream-light/50 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-romantic-pink/20">
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
            <p className="text-muted-foreground">
              Retrieving the most precious moments of our journey together...
            </p>
          </div>
        </div>

        {/* Photo Collage Layout */}
        <div className="relative fade-in-up">
          <div className="grid grid-cols-6 grid-rows-4 gap-4 h-[600px] md:h-[700px] lg:h-[800px]">
            {/* Large featured photo - top left */}
            <Card className="col-span-2 row-span-2 bg-gradient-to-br from-white/80 to-romantic-cream-light/80 border-2 border-romantic-pink/20 rounded-3xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 group">
              <div className="h-full flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
                <div className="mb-4 p-4 bg-romantic-pink/20 rounded-full shadow-lg group-hover:bg-romantic-pink/30 transition-colors duration-500">
                  <ImageIcon size={32} className="text-romantic-pink" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Featured Memory</h3>
                <p className="text-sm text-muted-foreground text-center">Our most special moment</p>
              </div>
            </Card>

            {/* Medium photo - top center */}
            <Card className="col-span-2 row-span-1 bg-gradient-to-br from-white/80 to-romantic-blue-light/80 border-2 border-romantic-blue/20 rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 group">
              <div className="h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <Camera size={24} className="text-romantic-blue mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Adventure</p>
                </div>
              </div>
            </Card>

            {/* Tall photo - top right */}
            <Card className="col-span-2 row-span-3 bg-gradient-to-br from-white/80 to-romantic-cream-light/80 border-2 border-romantic-pink/20 rounded-3xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 group">
              <div className="h-full flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
                <div className="mb-4 p-4 bg-romantic-pink/20 rounded-full shadow-lg group-hover:bg-romantic-pink/30 transition-colors duration-500">
                  <Heart size={28} className="text-romantic-pink" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Love Story</h3>
                <p className="text-sm text-muted-foreground text-center">Our beautiful journey</p>
              </div>
            </Card>

            {/* Small photo - middle left */}
            <Card className="col-span-1 row-span-1 bg-gradient-to-br from-white/80 to-romantic-blue-light/80 border-2 border-romantic-blue/20 rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 group">
              <div className="h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Star size={20} className="text-romantic-blue" />
              </div>
            </Card>

            {/* Medium photo - middle center */}
            <Card className="col-span-1 row-span-1 bg-gradient-to-br from-white/80 to-romantic-cream-light/80 border-2 border-romantic-cream/20 rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 group">
              <div className="h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Camera size={20} className="text-romantic-cream" />
              </div>
            </Card>

            {/* Wide photo - bottom left */}
            <Card className="col-span-2 row-span-1 bg-gradient-to-br from-white/80 to-romantic-pink-light/80 border-2 border-romantic-pink/20 rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 group">
              <div className="h-full flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <ImageIcon size={24} className="text-romantic-pink mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Memories</p>
                </div>
              </div>
            </Card>

            {/* Small photos - bottom */}
            <Card className="col-span-1 row-span-1 bg-gradient-to-br from-white/80 to-romantic-blue-light/80 border-2 border-romantic-blue/20 rounded-xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 group">
              <div className="h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Heart size={18} className="text-romantic-blue pulse-heart" />
              </div>
            </Card>

            <Card className="col-span-1 row-span-1 bg-gradient-to-br from-white/80 to-romantic-cream-light/80 border-2 border-romantic-cream/20 rounded-xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 group">
              <div className="h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Star size={18} className="text-romantic-cream" />
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12 fade-in-up">
          <div className="bg-gradient-to-r from-romantic-pink/10 via-romantic-cream/10 to-romantic-blue/10 rounded-3xl p-8 border border-romantic-pink/20">
            <h3 className="text-2xl font-bold text-romantic-pink mb-4">
              "Each photo tells our story..."
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These empty frames are waiting to be filled with our laughter, our adventures, 
              our quiet moments, and all the love we share. Every memory is a chapter in our endless story.
            </p>
          </div>
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
          
          <Link to="/chapter-three">
            <Button 
              onClick={handleNavigation}
              size="lg" 
              className="bg-romantic-blue hover:bg-romantic-blue/90 text-white font-semibold px-8 py-3 rounded-full shadow-floating transition-all duration-500 hover:scale-105"
            >
              Birthday Wishes
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChapterTwoPage;