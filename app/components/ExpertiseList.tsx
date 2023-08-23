import "devicon/devicon.min.css";
import { frontExp } from "@/app/utils/ExpertiseUtil";

export const ExpertiseList = () => {
  const expertise: string[] = [
    "HTML5",
    "CSS3",
    "Javascript",
    "Typescript",
    "NodeJS",
    "express",
    "SocketIO",
    "React",
    "NextJS",
    "VueJS",
    "NuxtJS",
    "AngularJS",
    "TailwindCSS",
    "MaterialUI",
    "Bootstrap",
    "MySQL",
    "MongoDB",
    "Flutter",
    "Wordpress",
    "Docker",
    "Unity",
    "Photoshop",
  ];

  return (
    <>
      <div
        className={
          "scroll-color mx-auto flex justify-center gap-12 flex-wrap rounded px-4 py-8 shadow-inner shadow-gray-900"
        }
      >
        {expertise.map((exp, index) => {
          return (
            <div
              key={`devicon-${index}`}
              className={
                "flex justify-center flex-col text-center gap-3 text-clamp"
              }
            >
              <i
                className={`devicon-${exp.toLowerCase()}-plain ${
                  exp.toLowerCase() === "express" ||
                  exp.toLowerCase() === "unity"
                    ? `devicon-${exp.toLowerCase()}-original`
                    : ""
                } text-white text-4xl `}
                color={"white"}
              ></i>
              <label className={"text-white"}>{exp}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
