import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Star } from 'lucide-react';

const ChapterOne = () => {
  return (
    <section id="chapter1" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-romantic-pink/10 text-romantic-pink px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star size={16} />
            Chapter I
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            The Day You Were Born
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The universe conspired to create something extraordinary...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <Card className="bg-gradient-to-br from-white/80 to-romantic-cream-light/80 backdrop-blur-sm border-2 border-romantic-pink/20 rounded-3xl p-8 shadow-dreamy">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-romantic-pink/20 rounded-full">
                    <Calendar className="text-romantic-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">The Special Date</h3>
                    <p className="text-muted-foreground">A day that changed everything</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-romantic-blue/20 rounded-full">
                    <Clock className="text-romantic-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Perfect Timing</h3>
                    <p className="text-muted-foreground">When miracles happen</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-romantic-cream/20 rounded-full">
                    <MapPin className="text-romantic-cream" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Where Dreams Begin</h3>
                    <p className="text-muted-foreground">The place that welcomed an angel</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8 fade-in-delayed">
            <div className="bg-gradient-to-br from-romantic-pink/10 to-romantic-blue/10 rounded-3xl p-8 border border-romantic-pink/20">
              <h3 className="text-2xl font-bold text-romantic-pink mb-4">
                "And then there was you..."
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                On this very day, years ago, the world became infinitely more beautiful. 
                The stars aligned, the angels sang, and the most precious soul was born.
              </p>
            </div>

            <div className="bg-gradient-to-br from-romantic-blue/10 to-romantic-cream/10 rounded-3xl p-8 border border-romantic-blue/20">
              <h3 className="text-2xl font-bold text-romantic-blue mb-4">
                A Story of Light
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                From that moment forward, you've been painting the world with your smile, 
                filling hearts with joy, and making every day brighter just by being you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterOne;