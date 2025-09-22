import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface ConfettiEffectProps {
  trigger: number;
}

const ConfettiEffect = ({ trigger }: ConfettiEffectProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (trigger > 0) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!showConfetti) return null;

  return (
    <Confetti
      width={windowDimensions.width}
      height={windowDimensions.height}
      recycle={false}
      numberOfPieces={200}
      gravity={0.3}
      colors={['#FFB6C1', '#FFF0F5', '#F0E68C', '#E6E6FA', '#FFE4E1', '#FF69B4']}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ConfettiEffect;