"use client";

import { Button, CustomFlowbiteTheme, Modal } from "flowbite-react";
import { ReactNode, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { orbitron } from "@/app/utils/fonts";

interface Props {
  src: string;
  title: string;
  repoURL: string;
  children: ReactNode;
}

const customTheme: CustomFlowbiteTheme["modal"] = {
  root: {
    show: {
      on: "flex bg-gray-900 bg-opacity-30 dark:bg-opacity-50",
    },
  },
  content: {
    inner:
      "flex bg-cyan-500 bg-opacity-50 dark:bg-opacity-50 rounded border-2 border-cyan-400 modal-bg text-white animate-holo-open min-h-[75svh]",
  },
};

export default function HoloModal(props: Props) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const controls = { openModal, setOpenModal };

  useEffect(() => {
    if (openModal == undefined) {
      const event = new CustomEvent("projecting-test", { detail: false });
      document.documentElement.style.overflow = "auto";
      document.dispatchEvent(event);
    } else {
      const event = new CustomEvent("projecting-test", { detail: true });
      document.documentElement.style.overflow = "hidden";
      document.dispatchEvent(event);
    }
  }, [openModal]);

  return (
    <>
      <button onClick={() => controls.setOpenModal("modal")}>
        {props.children}
      </button>

      {controls.openModal === "modal" && (
        <Modal
          theme={customTheme}
          dismissible
          show={controls.openModal === "modal"}
          onClose={() => controls.setOpenModal(undefined)}
          size={"7xl"}
          className={"z-[55] bg-opacity-10"}
        >
          <div
            className={`flex w-full flex-col items-center justify-center rounded-2xl p-4`}
          >
            <div className={"flex w-[100%] h-12 justify-center py-2"}>
              <h2
                className={`text-center text-2xl mx-auto ${orbitron.className}`}
              >
                {props.title}
              </h2>
              <span>
                <AiOutlineClose
                  className={
                    "hover:text-cyan-400 transition-colors duration-300"
                  }
                  color=""
                  fontSize="2rem"
                  onClick={() => controls.setOpenModal(undefined)}
                />
              </span>
            </div>

            <iframe
              src={props.src}
              width={"100%"}
              height={"100%"}
              className={"bg-neutral-100 h-full"}
            ></iframe>
            <div
              className={
                "flex flex-col items-center justify-center gap-2 p-2 text-center md:flex-row"
              }
            >
              <a href={props.repoURL} target={"_blank"}>
                <div className="btn-1">View Code</div>
              </a>
              <a href={props.src} target={"_blank"}>
                <div className={"btn-1"}>Visit Website</div>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
