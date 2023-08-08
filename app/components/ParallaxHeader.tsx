'use client';
import { useEffect, useState } from 'react';

export const ParallaxHeader = () => {
  const [state, setState] = useState({
    mousePos: { mouseX: 0, mouseY: 0 },
    blur: false,
    rotationDegs: 0,
    scrollY: 0,
    windowDimensions: { width: 0, height: 0 },
  });

  useEffect(() => {
    const handleScroll = () => {
      setState((prevState) => ({
        ...prevState,
        scrollY: window.scrollY,
      }));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (state.scrollY === 0) {
        setState((prevState) => ({
          ...prevState,
          mousePos: { mouseX: e.clientX, mouseY: e.clientY },
        }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [state.scrollY]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      blur: true,
    }));

    const blurTimeout = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        blur: false,
      }));
    }, 50);

    return () => clearTimeout(blurTimeout);
  }, [state.mousePos]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setState((prevState) => ({
        ...prevState,
        windowDimensions: {
          width: window.innerWidth / 2,
          height: window.innerHeight / 2,
        },
      }));
    }
  }, []);

  const calculateLayerPos = (speed: number) =>
    `${50 - (state.mousePos.mouseX - state.windowDimensions.width) * speed}% ${
      50 - (state.mousePos.mouseY - state.windowDimensions.height) * speed
    }%`;

  const layer1pos = calculateLayerPos(0.01);
  const layer2pos = calculateLayerPos(0.02);
  const layer3pos = calculateLayerPos(0.03);
  const layer4pos = calculateLayerPos(0.05);

  return (
    <div
      id={'top'}
      className={`layer1-bg h-screen w-screen bg-cover bg-center`}
      style={{ backgroundPosition: layer1pos }}
    >
      <div
        className={`${
          state.blur ? 'bg-blur' : ''
        } layer2-bg absolute left-0 top-0 h-2/3 w-1/2`}
        style={{ backgroundPosition: layer2pos }}
      ></div>
      <div
        className={`${
          state.blur ? 'bg-blur' : ''
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
          state.blur ? 'bg-blur' : ''
        } layer4-bg absolute bottom-0 right-0 h-1/2 w-full`}
        style={{ backgroundPosition: layer4pos }}
      ></div>
      <div
        className={`cockpit-bg absolute bottom-0 min-h-screen w-full bg-cover bg-center`}
      ></div>
    </div>
  );
};