"use client";
import { useEffect, useState } from "react";
import { orbitron } from "../utils/fonts";
import { Tooltip } from "flowbite-react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const ParallaxHeader = () => {
  const [state, setState] = useState({
    mousePos: { mouseX: 0, mouseY: 0 },
    blur: false,
    rotationDegs: 0,
    scrollY: 0,
    windowDimensions: { width: 0, height: 0 },
    mobile: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setState((prevState) => ({
        ...prevState,
        scrollY: window.scrollY,
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
    if (typeof window !== "undefined") {
      setState((prevState) => ({
        ...prevState,
        windowDimensions: {
          width: window.innerWidth / 2,
          height: window.innerHeight / 2,
        },
        mobile: "ontouchstart" in window,
      }));
    }
  }, []);

  const calculateLayerPos = (speed: number) =>
    `${50 - (state.mousePos.mouseX - state.windowDimensions.width) * speed}% ${
      50 - (state.mousePos.mouseY - state.windowDimensions.height) * speed
    }%`;

  const calculateDistance = (initialSizePercent: number, speed: number) => {
    const responsiveSize =
      (state.windowDimensions.width * initialSizePercent) / 100;
    return (
      responsiveSize -
      (state.mousePos.mouseY - state.windowDimensions.height) * speed
    );
  };

  const layer1pos = calculateLayerPos(0.01);
  const layer2pos = calculateLayerPos(0.02);
  const layer2dist = calculateDistance(50, 0.1);
  const layer3pos = calculateLayerPos(0.03);
  const layer3dist = calculateDistance(40, 0.08);
  const layer4pos = calculateLayerPos(0.05);
  const layer4dist = calculateDistance(20, 0.06);

  return (
    <section
      className={`${
        state.mobile && "mobile-transitions"
      } layer1-bg h-screen w-screen bg-cover bg-center fixed top-0 z-[-1]`}
      style={{ backgroundPosition: layer1pos }}
    >
      <div
        className={`${state.blur ? "bg-blur" : ""} ${
          state.mobile && "mobile-transitions"
        } layer2-bg absolute left-0 top-0 h-5/6 w-1/2`}
        style={{
          backgroundPosition: layer2pos,
          backgroundSize: layer2dist,
        }}
      ></div>
      <div
        className={`${state.blur ? "bg-blur" : ""} ${
          state.mobile && "mobile-transitions"
        } layer5-bg absolute right-0 top-0 h-full w-1/2`}
        style={{ backgroundPosition: layer3pos, backgroundSize: layer3dist }}
      ></div>
      <div
        className={`absolute top-0 flex h-full w-full flex-col items-center justify-center text-center drop-shadow-xl transition-opacity duration-500 ${
          state.scrollY && "opacity-0"
        } ${orbitron.className}`}
      >
        <h1
          className={
            "header-text-shadow animate-slide-fade-in font-orbit text-5xl font-extrabold tracking-tight text-white"
          }
        >
          The Final Frontier
        </h1>
        <p className={"header-text-shadow animate-slide-fade-in"}>
          By Cedric Aoun
        </p>
      </div>
      <div
        className={`${state.blur ? "bg-blur" : ""} ${
          state.mobile && "mobile-transitions"
        } layer4-bg absolute bottom-0 right-0 h-1/2 w-full`}
        style={{ backgroundPosition: layer4pos, backgroundSize: layer4dist }}
      ></div>
      <div
        className={`z-[10000] absolute right-0 p-5 transition-opacity duration-300 ${
          state.mobile && !state.scrollY ? "opacity-100" : "opacity-0"
        }`}
      >
        <Tooltip
          content={"Tap on the background to navigate space."}
          placement={"right"}
          className={" text-xs"}
        >
          <div className={""}>
            <AiOutlineQuestionCircle
              color={"white"}
              fontSize={32}
            ></AiOutlineQuestionCircle>
          </div>
        </Tooltip>
      </div>
    </section>
  );
};
