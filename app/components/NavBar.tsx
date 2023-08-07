'use client';
import { useEffect, useRef, useState } from 'react';

export const NavBar = () => {
  const steeringRef = useRef<any>('');
  const [rotationDegs, setRotationDegs] = useState<number>(0);
  const [showYoke, setShowYoke] = useState<boolean>(true);
  const [showLens, setShowLens] = useState<boolean>(false);

  const yoke: string = 'steering-yoke.svg';
  const lens: string = 'holo-lens.svg';

  useEffect(() => {
    let box = steeringRef.current;
    let boxBoundingRect = box.getBoundingClientRect();
    let boxCenter = {
      x: boxBoundingRect.left + boxBoundingRect.width / 2,
      y: boxBoundingRect.top + boxBoundingRect.height / 2,
    };

    const handleMouseMove = (e: any) => {
      let angle =
        Math.atan2(e.pageX - boxCenter.x, -(e.pageY - boxCenter.y)) *
        (180 / Math.PI);
      setRotationDegs(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setShowYoke(true);
        setShowLens(false);
      } else {
        setShowLens(true);
        setShowYoke(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`nav-perspective fixed bottom-0 left-1/4 z-50 flex h-28 w-1/2 items-center justify-center gap-2 border-2 border-gray-600 bg-gray-800 text-center font-bold text-white shadow-2xl shadow-white`}
    >
      <a
        className={
          ' duration-50 z-30 border-4 border-neutral-800 bg-white px-5 py-4 text-center text-black shadow-md shadow-white transition-all hover:bg-neutral-500 hover:text-white active:mt-1 active:shadow-none'
        }
      >
        <button>HOME</button>
      </a>
      <a
        href={'#'}
        className={
          ' duration-50 z-30 border-4 border-neutral-800 bg-white px-5 py-4 text-center text-black shadow-md shadow-white transition-all hover:bg-neutral-500 hover:text-white active:mt-1 active:shadow-none '
        }
      >
        <button>ABOUT</button>
      </a>
      <div
        ref={steeringRef}
        className={`z-50 mx-5 mb-20 overflow-visible rounded-2xl bg-white px-5 py-5`}
      >
        <div className={`bg-grid-white border-2 bg-cyan-500 bg-contain p-4`}>
          <img
            alt=''
            className={`${
              showYoke ? 'animate-rotate-360-alt' : 'animate-rotate-360'
            }`}
            src={scrollY == 0 ? yoke : lens}
            style={{
              height: '50px',
              width: '50px',
              transform: `rotate(${
                scrollY == 0 ? Math.min(Math.max(rotationDegs, -75), 75) : '0'
              }deg)`,
            }}
          />
        </div>
      </div>
      <a
        className={
          ' duration-50 z-30 border-4 border-neutral-800 bg-white px-5 py-4 text-center text-black shadow-md shadow-white transition-all hover:bg-neutral-500 hover:text-white active:mt-1 active:shadow-none'
        }
      >
        <button>PROJECTS</button>
      </a>
      <a
        className={
          ' duration-50 z-30 border-4 border-neutral-800 bg-white px-5 py-4 text-center text-black shadow-md shadow-white transition-all hover:bg-neutral-500 hover:text-white active:mt-1 active:shadow-none'
        }
      >
        <button>CONTACT</button>
      </a>
    </nav>
  );
};
