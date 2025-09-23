import { Card } from '@/components/ui/card';
import { Cake, Gift, Music, Flower, Sparkles, Heart } from 'lucide-react';

const ChapterThree = () => {
  const wishes = [
    {
      icon: Cake,
      title: "Sweet Celebrations",
      message: "May your day be filled with the sweetest moments and your favorite treats! 🍰",
      color: "romantic-pink"
    },
    {
      icon: Gift,
      title: "Beautiful Surprises",
      message: "I hope this year brings you wonderful surprises and dreams come true! 🎁",
      color: "romantic-blue"
    },
    {
      icon: Music,
      title: "Joyful Melodies",
      message: "Let's dance to the rhythm of happiness and create beautiful memories! 🎵",
      color: "romantic-cream"
    },
    {
      icon: Flower,
      title: "Blooming Love",
      message: "Like a beautiful flower, may you continue to bloom and grow more radiant! 🌸",
      color: "romantic-pink"
    }
  ];

  return (
    <section id="chapter3" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-romantic-cream/10 text-romantic-cream px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift size={16} />
            Chapter III
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Birthday Wishes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the depths of my heart, these wishes are crafted just for you...
          </p>
        </div>

        <div className="bg-black/90 rounded-3xl p-8 mb-12 font-mono fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-2 text-sm">Wish Generator - v2.0</span>
          </div>
          
          <div className="text-green-400 text-sm">
            <p>// Generating personalized birthday wishes...</p>
            <p>// Accessing love database...</p>
            <p className="text-romantic-pink">{'>'} run generateWishes(myLove, birthdayMagic)</p>
            <p>// Output: 4 wishes compiled with infinite love ❤️</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wishes.map((wish, index) => (
            <Card 
              key={index}
              className="group bg-gradient-to-br from-white/80 to-romantic-cream-light/80 backdrop-blur-sm border-2 border-romantic-pink/20 rounded-3xl p-8 shadow-soft hover:shadow-floating transition-all duration-500 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center group-hover:scale-105 transition-transform duration-500">
                <div className={`mb-6 p-4 bg-${wish.color}/20 rounded-full group-hover:bg-${wish.color}/30 transition-colors duration-500 relative`}>
                  <wish.icon size={40} className={`text-${wish.color}`} />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles size={16} className={`text-${wish.color} pulse-heart`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {wish.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {wish.message}
                </p>

                <div className="flex items-center gap-1">
                  {Array(5).fill(null).map((_, i) => (
                    <Heart 
                      key={i} 
                      size={12} 
                      className={`text-${wish.color} pulse-heart`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up">
          <Card className="bg-gradient-to-br from-romantic-pink/10 via-romantic-cream/10 to-romantic-blue/10 backdrop-blur-sm border-2 border-romantic-pink/30 rounded-3xl p-12 shadow-dreamy">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="text-romantic-blue pulse-heart" size={32} />
              <h3 className="text-3xl font-bold text-romantic-pink">
                The Ultimate Wish
              </h3>
              <Sparkles className="text-romantic-blue pulse-heart" size={32} />
            </div>
            
            <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto mb-6">
              Beyond all the gifts, beyond all the celebrations, my greatest wish is simple: 
              to see your beautiful smile every day, to hold your hand through every adventure, 
              and to love you more deeply with each passing year.
            </p>

            <div className="flex justify-center gap-2">
              {Array(7).fill(null).map((_, i) => (
                <Heart 
                  key={i} 
                  size={24} 
                  className="text-romantic-pink pulse-heart" 
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChapterThree;