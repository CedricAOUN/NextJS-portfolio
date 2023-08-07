'use client';
import { useEffect, useRef, useState } from 'react';

export const ConsoleMonitor = () => {
  const steeringRef = useRef<any>('');
  const [rotationDegs, setRotationDegs] = useState<number>(0);

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

  return (
    <nav className={`fixed bottom-0 flex w-screen justify-center`}>
      <div
        ref={steeringRef}
        className={`z-50 rounded-2xl bg-white px-5 py-5 opacity-80 shadow-2xl shadow-black`}
      >
        <div className={`bg-grid-white border-2 bg-lime-700 bg-contain p-4`}>
          <img
            alt=''
            className={''}
            src={'https://www.svgrepo.com/show/520422/yoke.svg'}
            style={{
              height: '50px',
              width: '50px',
              transform: `rotate(${rotationDegs}deg)`,
            }}
          />
        </div>
      </div>
    </nav>
  );
};
