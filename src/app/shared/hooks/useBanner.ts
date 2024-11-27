'use client'

import { useEffect, useState } from "react";

export const useBanner = (imagesLength: number) => {
  const [currentImagePosition, setCurrentImagePosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        nextImage();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentImagePosition, isPaused]);

  const nextImage = () => {
    setCurrentImagePosition(prev => prev === imagesLength - 1 ? 0 : prev + 1);
  };

  const goToImage = (index: number) => {
    setCurrentImagePosition(index);
  };

  const handlePause = (pause: boolean) => {
    setIsPaused(pause);
  };

  return {
    currentImagePosition,
    goToImage,
    handlePause
  };
};