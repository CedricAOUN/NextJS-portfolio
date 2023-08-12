'use client';
import {useEffect, useState} from 'react';
import {orbitron} from '../utils/fonts'
import {Tooltip} from "flowbite-react";
import {AiOutlineQuestionCircle} from "react-icons/ai";

export const ParallaxHeader = () => {
    const [state, setState] = useState({
        mousePos: {mouseX: 0, mouseY: 0},
        blur: false,
        rotationDegs: 0,
        scrollY: 0,
        windowDimensions: {width: 0, height: 0},
        mobile: false,
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
                    mousePos: {mouseX: e.clientX, mouseY: e.clientY},
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
                mobile: (('ontouchstart' in window) || (navigator.maxTouchPoints > 0))
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
        <section
            className={`layer1-bg h-screen w-screen bg-cover bg-center fixed top-0 z-[-1] ${!state.scrollY && 'cursor-none'}`}
            style={{backgroundPosition: layer1pos}}
        >
            <div
                className={`${
                    state.blur ? 'bg-blur' : ''
                } layer2-bg absolute left-0 top-0 h-5/6 w-1/2 bg-[length:180px] md:bg-[length:340px] xl:bg-[length:550px]`}
                style={{backgroundPosition: layer2pos}}
            ></div>
            <div
                className={`${
                    state.blur ? 'bg-blur' : ''
                } layer5-bg absolute right-0 top-0 h-full w-1/2 bg-[length:150px] md:bg-[length:300px] xl:bg-[length:400px]`}
                style={{backgroundPosition: layer3pos}}
            ></div>
            <div
                className={`absolute top-0 flex h-full w-full flex-col items-center justify-center text-center drop-shadow-xl transition-opacity duration-500 ${state.scrollY && 'opacity-0'} ${orbitron.className}`}
            >
                <h1
                    className={
                        'header-text-shadow animate-slide-fade-in font-orbit text-5xl font-extrabold tracking-tight text-white'
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
                } layer4-bg absolute bottom-0 right-0 h-1/2 w-full bg-[length:100px] md:bg-[length:200px] xl:bg-[length:300px]`}
                style={{backgroundPosition: layer4pos}}
            ></div>
            <div className={`absolute right-0 p-5 transition-opacity duration-300 ${state.mobile && !state.scrollY ? 'opacity-100' : 'opacity-0' }`}>
                    <Tooltip content={'Tap on the background to navigate space.'} placement={'right'}
                             className={'z-50 text-xs'}>
                        <div className={''}>
                            <AiOutlineQuestionCircle color={'white'} fontSize={32}></AiOutlineQuestionCircle>
                        </div>
                    </Tooltip>
            </div>
        </section>
    );
};
