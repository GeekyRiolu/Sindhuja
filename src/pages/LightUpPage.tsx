import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfettiEffect from '@/components/ConfettiEffect';
import { Button } from '@/components/ui/button';

const LightUpPage = () => {
  const [blast, setBlast] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handleLightUp = () => {
    setBlast(true);
    if (audioRef.current && !audioPlayed) {
      audioRef.current.play();
      setAudioPlayed(true);
    }
    setTimeout(() => {
      navigate('/intro');
    }, 4000); // Show confetti for 4 seconds then go to intro
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20"
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Confetti sound effect */}
      <audio ref={audioRef} src="/assets/confetti.mp3" />
      <h1 className="text-4xl md:text-5xl font-bold mb-8">It's dark... isn't it</h1>
      <Button
        onClick={handleLightUp}
        size="lg"
        className="bg-romantic-pink hover:bg-romantic-pink/90 text-white font-semibold px-8 py-3 rounded-full shadow-floating transition-all duration-500 hover:scale-105"
      >
        Let's light it up!
      </Button>
      {blast && (
        <>
          <ConfettiEffect trigger={Math.random()} position="left" widthPercent={1} />
          <ConfettiEffect trigger={Math.random()} position="right" widthPercent={1} />
        </>
      )}
    </div>
  );
};

export default LightUpPage;
