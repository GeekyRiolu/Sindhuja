import { useEffect, useState } from 'react';
import teddyBear from '@/assets/teddy-bear.png';
import balloons from '@/assets/balloons.png';
import hearts from '@/assets/hearts.png';
import confetti from '@/assets/confetti.png';

interface FloatingElement {
  id: number;
  type: 'teddy' | 'balloon' | 'heart' | 'confetti';
  x: number;
  y: number;
  delay: number;
  size: number;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const createElements = () => {
      const newElements: FloatingElement[] = [];
      
      // Create teddy bears
      for (let i = 0; i < 3; i++) {
        newElements.push({
          id: i,
          type: 'teddy',
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          delay: Math.random() * 3,
          size: 60 + Math.random() * 40,
        });
      }
      
      // Create balloons
      for (let i = 0; i < 4; i++) {
        newElements.push({
          id: i + 10,
          type: 'balloon',
          x: Math.random() * 85 + 5,
          y: Math.random() * 70 + 15,
          delay: Math.random() * 4,
          size: 70 + Math.random() * 30,
        });
      }
      
      // Create hearts
      for (let i = 0; i < 6; i++) {
        newElements.push({
          id: i + 20,
          type: 'heart',
          x: Math.random() * 90 + 5,
          y: Math.random() * 85 + 5,
          delay: Math.random() * 2,
          size: 20 + Math.random() * 30,
        });
      }
      
      // Create confetti
      for (let i = 0; i < 8; i++) {
        newElements.push({
          id: i + 30,
          type: 'confetti',
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          size: 15 + Math.random() * 25,
        });
      }
      
      setElements(newElements);
    };

    createElements();
  }, []);

  const getImageSrc = (type: string) => {
    switch (type) {
      case 'teddy': return teddyBear;
      case 'balloon': return balloons;
      case 'heart': return hearts;
      case 'confetti': return confetti;
      default: return hearts;
    }
  };

  const getAnimationClass = (type: string) => {
    switch (type) {
      case 'teddy': return 'floating-slow';
      case 'balloon': return 'floating';
      case 'heart': return 'pulse-heart floating-delayed';
      case 'confetti': return 'confetti';
      default: return 'floating';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${getAnimationClass(element.type)}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
        >
          <img
            src={getImageSrc(element.type)}
            alt=""
            className="w-full h-full object-contain opacity-70 hover:opacity-90 transition-opacity duration-500"
            style={{
              filter: 'drop-shadow(0 4px 10px rgba(255, 182, 193, 0.3))',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;