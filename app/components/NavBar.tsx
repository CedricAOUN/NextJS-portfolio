'use client';
import {useEffect, useRef, useState} from 'react';
import {set} from 'zod';

export const NavBar = () => {
    const steeringRef = useRef<any>('');
    const [rotationDegs, setRotationDegs] = useState<number>(0);
    const [isProjecting, setIsProjecting] = useState<boolean>(false);
    const [showYoke, setShowYoke] = useState<boolean>(true);

    const yoke: string = 'steering-yoke.svg';
    const lens: string = 'holo-lens.svg';

    // function is_touch_enabled() {
    //     return ( 'ontouchstart' in window ) ||
    //         ( navigator.maxTouchPoints > 0 )
    // }

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
            } else {
                setShowYoke(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        function handleProjecting(e: any) {
            setIsProjecting(e.detail);
            console.log('test');
        }

        document.addEventListener('projecting-test', handleProjecting);
        return () => {
            document.removeEventListener('projecting-test', handleProjecting);
        };
    }, []);

    function scrollToAnchor(anchorId: string) {
        const element = document.getElementById(anchorId);

        element?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <nav
                className={`nav-perspective outer-glow fixed bottom-0 left-[16.7%] z-50 h-28 w-2/3 nav-bg p-2 text-center font-bold text-white`}
            >
                <div
                    className={
                        'flex h-full w-full items-center justify-center gap-1 bg-neutral-800 flex-shrink'
                    }
                >
                    <button
                        onClick={() => scrollToAnchor('top')}
                        className={
                            'hidden border-4 tracking-wider border-neutral-800 bg-white p-4 text-center text-xs text-black shadow-md shadow-white transition-all duration-75 hover:bg-neutral-500 hover:text-white active:mt-1 active:shadow-none lg:block'
                        }>FLIGHT DECK
                    </button>
                    <button onClick={() => scrollToAnchor('about')}
                            className={
                                'hidden border-4 tracking-wider border-neutral-800 bg-white p-4 text-center text-xs text-black shadow-md shadow-white transition-all duration-75 hover:bg-neutral-500 hover:text-white active:mt-1 active:shadow-none lg:block '
                            }>ABOUT
                    </button>
                    <div
                        ref={steeringRef}
                        className={`z-50 mx-5 mb-20 overflow-visible rounded-2xl p-1 min-w-max`}
                    >
                        <div
                            className={`bg-grid-white border-2 bg-[length:300px_300px] rounded bg-center p-4`}
                        >
                            <img
                                alt=''
                                className={` ${
                                    showYoke && !isProjecting
                                        ? 'animate-rotate-360-alt'
                                        : isProjecting
                                            ? 'animate-inf-spin'
                                            : 'animate-rotate-360'
                                } `}
                                src={showYoke ? yoke : lens}
                                style={{
                                    height: '50px',
                                    width: '50px',
                                    transform: `rotate(${
                                        showYoke ? Math.min(Math.max(rotationDegs, -75), 75) : '0'
                                    }deg)`,
                                }}
                            />
                        </div>
                    </div>
                    <button onClick={() => scrollToAnchor('projects')}
                            className={
                                ' hidden border-4 tracking-wider border-neutral-800 bg-white p-4 text-center text-xs text-black shadow-md shadow-white transition-all duration-75 hover:bg-neutral-500 hover:text-white active:mt-1 active:shadow-none lg:block'
                            }>PROJECTS
                    </button>

                    <button onClick={() => scrollToAnchor('contact')}
                            className={
                                'hidden border-4 tracking-wider border-neutral-800 bg-white p-4 text-center text-xs text-black shadow-md shadow-white transition-all duration-75 hover:bg-neutral-500 hover:text-white active:mt-1 active:shadow-none lg:block'
                            }>CONTACT
                    </button>
                </div>
            </nav>
            {!showYoke && isProjecting && (
                <div
                    className={
                        'centered down-triang h-[25rem] w-[15rem] animate-pulse bg-cyan-400 bg-opacity-30'
                    }
                ></div>
            )}
        </>
    );
};
