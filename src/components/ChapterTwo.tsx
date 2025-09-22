import { Card } from '@/components/ui/card';
import { ImageIcon, Heart, Camera, Star } from 'lucide-react';

const ChapterTwo = () => {
  const memoryPlaceholders = Array(6).fill(null);

  return (
    <section id="chapter2" className="min-h-screen py-20 px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoryPlaceholders.map((_, index) => (
            <Card 
              key={index}
              className="group relative aspect-square bg-gradient-to-br from-white/80 to-romantic-cream-light/80 border-2 border-romantic-pink/20 rounded-3xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
                <div className="mb-4 p-4 bg-romantic-pink/20 rounded-full shadow-lg group-hover:bg-romantic-pink/30 transition-colors duration-500">
                  <ImageIcon size={40} className="text-romantic-pink" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Memory #{index + 1}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  A beautiful moment captured in time, waiting to be shared
                </p>
                
                <div className="flex gap-1">
                  {Array(3).fill(null).map((_, i) => (
                    <Heart 
                      key={i} 
                      size={16} 
                      className="text-romantic-pink pulse-heart" 
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Star className="text-romantic-blue" size={20} />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-romantic-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
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
      </div>
    </section>
  );
};

export default ChapterTwo;