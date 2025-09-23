import React, { useEffect, useRef } from 'react';

// Simple flower animation using CSS
const FlowerEffect = ({ trigger = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';
    // Create 50 flowers for a dense effect
    for (let i = 0; i < 80; i++) {
      const flower = document.createElement('div');
      flower.className = 'falling-flower';
      flower.style.left = `${Math.random() * 95}%`;
      flower.style.top = `${Math.random() * 10 - 10}px`;
      flower.style.backgroundImage = "url('src/assets/flower.png')";
      flower.style.backgroundSize = 'contain';
      flower.style.backgroundRepeat = 'no-repeat';
      flower.style.width = '40px';
      flower.style.height = '40px';
      flower.style.animationDelay = `${Math.random() * 2}s`;
      flower.style.animationDuration = '3.5s';
      containerRef.current.appendChild(flower);
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
      }}
    />
  );
};

export default FlowerEffect;

// Add CSS for flowers
// Place this in App.css or FlowerEffect.module.css
/*
.falling-flower {
  position: absolute;
  top: -60px;
  opacity: 0.95;
  animation: flower-fall 3.5s cubic-bezier(.4,.8,.6,1) forwards;
}
@keyframes flower-fall {
  0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.95; }
  80% { opacity: 1; }
  100% { transform: translateY(100vh) scale(1.1) rotate(360deg); opacity: 0; }
}
*/
