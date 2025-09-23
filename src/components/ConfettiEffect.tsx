import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface ConfettiEffectProps {
  trigger: number;
  position?: 'left' | 'right';
  widthPercent?: number; // percent of window width
}

const ConfettiEffect = ({ trigger, position, widthPercent }: ConfettiEffectProps) => {
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
  }, 3500);

      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!showConfetti) return null;

  // Default to full width if not specified
  const width = windowDimensions.width * ((typeof position !== 'undefined' && widthPercent) ? widthPercent : 1);
  const left = position === 'right'
    ? windowDimensions.width - width
    : 0;

  return (
    <Confetti
      width={width}
      height={windowDimensions.height}
      recycle={false}
      numberOfPieces={200}
      gravity={0.3}
      colors={["#FFB6C1", "#FFF0F5", "#F0E68C", "#E6E6FA", "#FFE4E1", "#FF69B4"]}
      style={{
        position: "fixed",
        top: 0,
        left,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default ConfettiEffect;