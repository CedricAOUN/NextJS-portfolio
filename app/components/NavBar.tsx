"use client";
import { useEffect, useRef, useState } from "react";
import { HamburgerIcon } from "@/app/components/HamburgerIcon";

export const NavBar = () => {
  const steeringRef = useRef<any>("");
  const [rotationDegs, setRotationDegs] = useState<number>(0);
  const [isProjecting, setIsProjecting] = useState<boolean>(false);
  const [showYoke, setShowYoke] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>("top");
  const [mobile, setMobile] = useState<boolean>(false);

  const yoke: string = "testing-yoke.png";
  const lens: string = "holo-lens.png";

  function handleOpen() {
    setOpen(!open);
  }

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
      if (typeof window !== "undefined") {
        setMobile("ontouchstart" in window);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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

    function updateActiveSection() {
      const sections = ["about", "work", "projects", "info", "contact"];

      if (window.scrollY == 0) {
        setCurrentSection("top");
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              setCurrentSection(section);
              break;
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateActiveSection);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    function handleProjecting(e: any) {
      setIsProjecting(e.detail);
    }

    document.addEventListener("projecting-test", handleProjecting);
    return () => {
      document.removeEventListener("projecting-test", handleProjecting);
    };
  }, []);

  function scrollToAnchor(anchorId: string) {
    if (anchorId == "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(anchorId);

      element?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <nav
        className={
          "flex flex-col xl:flex-row w-4/6 h-16 fixed top-0 rounded-2xl left-0 bg-transparent justify-start items-start gap-2 ml-2"
        }
      >
        <button
          onClick={handleOpen}
          className={`${
            open && "current-nav"
          } mt-2 mr-3 border-2 border-neutral-950 hover:bg-gray-600 rounded text-white bg-gray-900 transition-colors duration-300`}
        >
          <HamburgerIcon />
        </button>
        {open && (
          <>
            <button
              onClick={() => scrollToAnchor("top")}
              className={`${
                currentSection == "top" && "current-nav"
              } w-36 min-w-36 mt-2 border-2 border-neutral-950 hover:bg-gray-600 p-3 rounded text-white bg-gray-900 transition-colors duration-300`}
            >
              <p className={"text-clamp"}>FLIGHT DECK</p>
            </button>
            <button
              onClick={() => scrollToAnchor("about")}
              className={`${
                currentSection == "about" && "current-nav"
              } w-36 mt-2 border-2 border-neutral-950 hover:bg-gray-600 p-3 rounded text-white bg-gray-900 transition-colors duration-300`}
            >
              <p className={"text-clamp"}>ABOUT</p>
            </button>
            <button
              onClick={() => scrollToAnchor("work")}
              className={`${
                currentSection == "work" && "current-nav"
              } w-36 mt-2 border-2 border-neutral-950 hover:bg-gray-600 p-3 rounded text-white bg-gray-900 transition-colors duration-300`}
            >
              <p className={"text-clamp"}>EXPERIENCE</p>
            </button>
            <button
              onClick={() => scrollToAnchor("projects")}
              className={`${
                currentSection == "projects" && "current-nav"
              } w-36 mt-2 border-2 border-neutral-950 hover:bg-gray-600 p-3 rounded text-white bg-gray-900 transition-colors duration-300`}
            >
              <p className={"text-clamp"}>PROJECTS</p>
            </button>
            <button
              onClick={() => scrollToAnchor("info")}
              className={`${
                currentSection == "info" && "current-nav"
              } w-36 mt-2 border-2 border-neutral-950 hover:bg-gray-600 p-3 rounded text-white bg-gray-900 transition-colors duration-300`}
            >
              <p className={"text-clamp"}>SITE INFO</p>
            </button>
            <button
              onClick={() => scrollToAnchor("contact")}
              className={`${
                currentSection == "contact" && "current-nav"
              } w-36 mt-2 border-2 border-neutral-950 hover:bg-gray-600 p-3 rounded text-white bg-gray-900 transition-colors duration-300`}
            >
              <p className={"text-clamp"}>CONTACT</p>
            </button>
          </>
        )}
      </nav>
      <div
        ref={steeringRef}
        className={`overflow-visible rounded-2xl  w-max fixed bottom-0 controls transition-opacity duration-500 ${
          showYoke || isProjecting ? "" : "hidden"
        }`}
      >
        <div className={`perspective border-2 rounded bg-center p-4`}>
          <img
            alt=""
            className={` ${
              showYoke && !isProjecting
                ? "animate-rotate-360-alt"
                : isProjecting
                ? "animate-inf-spin"
                : "hidden"
            } ${mobile && "mobile-rotations"}`}
            src={showYoke ? yoke : lens}
            style={{
              height: `${showYoke ? "35px" : "50px"}`,
              width: "50px",
              transform: `rotate(${
                showYoke ? Math.min(Math.max(rotationDegs, -75), 75) : "0"
              }deg)`,
            }}
          />
        </div>
      </div>
      {!showYoke && isProjecting && (
        <div
          className={
            "centered down-triang h-[25rem] w-[15rem] animate-pulse bg-cyan-400 bg-opacity-30"
          }
        ></div>
      )}
    </>
  );
};
