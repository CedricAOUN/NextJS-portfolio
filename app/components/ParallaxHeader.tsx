'use client';
import { useEffect, useState } from 'react';

export const ParallaxHeader = () => {
  const [mousePos, setMousePos] = useState<{ mouseX: number; mouseY: number }>({
    mouseX: 0,
    mouseY: 0,
  });
  const [blur, setBlur] = useState<boolean>(false);
  const [rotationDegs, setRotationDegs] = useState<number>(0);

  const windowDimensions = {
    width: window?.innerWidth / 2,
    height: window?.innerHeight / 2,
  };

  const layer1pos = `${
    50 - (mousePos.mouseX - windowDimensions.width) * 0.01
  }% ${50 - (mousePos.mouseY - windowDimensions.height) * 0.01}%`;

  const layer2pos = `${
    50 - (mousePos.mouseX - windowDimensions.width) * 0.02
  }% ${50 - (mousePos.mouseY - windowDimensions.height) * 0.02}%`;

  const layer3pos = `${
    50 - (mousePos.mouseX - windowDimensions.width) * 0.03
  }% ${50 - (mousePos.mouseY - windowDimensions.height) * 0.03}%`;

  const layer4pos = `${
    50 - (mousePos.mouseX - windowDimensions.width) * 0.05
  }% ${50 - (mousePos.mouseY - windowDimensions.height) * 0.05}%`;

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePos({ mouseX: e.clientX, mouseY: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setBlur(true);
    let blurTimeout = setTimeout(() => setBlur(false), 50);

    return () => clearTimeout(blurTimeout);
  }, [mousePos]);

  return (
    <div
      className={`layer1-bg h-screen w-screen bg-cover bg-center`}
      style={{ backgroundPosition: layer1pos }}
    >
      <p className={'text-green-500'}>
        {mousePos.mouseX} - {mousePos.mouseY} - {windowDimensions.width}
      </p>
      <div
        className={`${
          blur ? 'bg-blur' : ''
        } layer2-bg absolute left-0 top-0 h-2/3 w-1/2`}
        style={{ backgroundPosition: layer2pos }}
      ></div>
      <div
        className={`${
          blur ? 'bg-blur' : ''
        } layer5-bg absolute right-0 top-0 h-full w-1/2`}
        style={{ backgroundPosition: layer3pos }}
      ></div>
      <div
        className={`absolute top-0 flex h-full w-full flex-col items-center justify-center text-center drop-shadow-xl`}
      >
        <h1
          className={
            'header-text-shadow animate-slide-fade-in font-orbit text-5xl font-extrabold tracking-tight text-amber-400'
          }
        >
          The Final Frontier
        </h1>
        <p className={'header-text-shadow animate-slide-fade-in'}>
          By Cedric Aoun
        </p>
      </div>
      <div
        className={`${
          blur ? 'bg-blur' : ''
        } layer4-bg absolute bottom-0 right-0 h-1/2 w-full`}
        style={{ backgroundPosition: layer4pos }}
      ></div>
      <div
        className={`cockpit-bg absolute bottom-0 min-h-screen w-full bg-cover bg-center`}
      ></div>
    </div>
  );
};
