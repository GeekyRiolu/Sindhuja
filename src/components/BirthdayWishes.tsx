import { Card } from '@/components/ui/card';
import { Cake, Gift, Music, Flower } from 'lucide-react';

const BirthdayWishes = () => {
  const wishes = [
    {
      icon: Cake,
      title: "Sweet Celebrations",
      message: "May your day be filled with the sweetest moments and your favorite treats! 🍰"
    },
    {
      icon: Gift,
      title: "Beautiful Surprises",
      message: "I hope this year brings you wonderful surprises and dreams come true! 🎁"
    },
    {
      icon: Music,
      title: "Joyful Melodies",
      message: "Let's dance to the rhythm of happiness and create beautiful memories! 🎵"
    },
    {
      icon: Flower,
      title: "Blooming Love",
      message: "Like a beautiful flower, may you continue to bloom and grow more radiant! 🌸"
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-romantic-pink">
            Birthday Wishes For You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each wish comes straight from my heart, filled with all the love I have for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wishes.map((wish, index) => (
            <Card 
              key={index}
              className="group bg-gradient-to-br from-white/80 to-romantic-blue-light/80 backdrop-blur-sm border-2 border-romantic-pink/20 rounded-3xl p-8 shadow-soft hover:shadow-floating transition-all duration-500 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center group-hover:scale-105 transition-transform duration-500">
                <div className="mb-6 p-4 bg-romantic-pink/20 rounded-full group-hover:bg-romantic-pink/30 transition-colors duration-500">
                  <wish.icon size={40} className="text-romantic-pink" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {wish.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {wish.message}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BirthdayWishes;