import React, { useEffect, useRef } from 'react';

// Enhanced balloon animation using CSS
const BalloonEffect = ({ trigger = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';
    // Create 40 balloons for denser effect
    for (let i = 0; i < 40; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.left = `${Math.random() * 95}%`;
      balloon.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;
      balloon.style.animationDelay = `${Math.random() * 2.5}s`;
      balloon.style.animationDuration = '3.5s';
      containerRef.current.appendChild(balloon);
    }
  }, [trigger]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1000,
        background: 'rgba(255, 182, 193, 0.35)', // romantic pink with transparency
      }}
    />
  );
};

export default BalloonEffect;

// Add CSS for balloons
// Place this in App.css or BalloonEffect.module.css
/*
.balloon {
  position: absolute;
  bottom: -60px;
  width: 32px;
  height: 48px;
  border-radius: 16px 16px 16px 16px / 24px 24px 32px 32px;
  opacity: 0.85;
  animation: balloon-float 3.5s cubic-bezier(.4,.8,.6,1) forwards;
}
@keyframes balloon-float {
  0% { transform: translateY(0) scale(1); opacity: 0.85; }
  80% { opacity: 1; }
  100% { transform: translateY(-100vh) scale(1.1); opacity: 0; }
}
*/
