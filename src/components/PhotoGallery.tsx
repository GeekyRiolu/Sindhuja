import { Card } from '@/components/ui/card';
import { ImageIcon, Heart } from 'lucide-react';

const PhotoGallery = () => {
  const photoPlaceholders = Array(6).fill(null);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-romantic-pink">
            Our Beautiful Memories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These special moments we've shared together will be displayed here. 
            Each photo tells a story of our love and happiness. 💕
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoPlaceholders.map((_, index) => (
            <Card 
              key={index}
              className="group relative aspect-square bg-gradient-to-br from-romantic-cream-light to-romantic-blue-light border-2 border-romantic-pink/20 rounded-3xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center group-hover:scale-105 transition-transform duration-500">
                <div className="mb-4 p-6 bg-white/80 rounded-full shadow-lg">
                  <ImageIcon size={48} className="text-romantic-pink" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Photo {index + 1}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Upload your favorite memory here
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-romantic-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;