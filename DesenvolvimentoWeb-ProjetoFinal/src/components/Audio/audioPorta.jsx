import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { Howl } from 'howler';

const AudioPlayer = forwardRef(({ src }, ref) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const soundInstance = new Howl({
      src: [src],
      onend: () => {
        setIsPlaying(false);
      }
    });

    setSound(soundInstance);

    // Cleanup para quando o componente desmonta
    return () => {
      soundInstance.stop();
    };
  }, [src]);

  useImperativeHandle(ref, () => ({
    playSound: () => {
      if (sound && !isPlaying) {
        sound.play();
        setIsPlaying(true);
      }
    }
  }));

  return null;
});

export default AudioPlayer;
