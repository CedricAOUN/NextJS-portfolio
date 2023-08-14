"use client";
import Link from "next/link";
import HoloModal from "@/app/components/HoloModal";
import { useState } from "react";
import { orbitron } from "@/app/utils/fonts";
import Image from "next/image";

interface Props {
  name: string;
  imgUrl: string;
  description: string;
  homepage: string;
  repoURL: string;
}

export const ProjectItem = (props: Props) => {
  function nameFormater(name: string) {
    let spaced = name.replaceAll("-", " ");

    return spaced.slice(0, 1).toUpperCase() + spaced.slice(1, spaced.length);
  }

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="max-w-[20rem] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ">
      {(props.homepage && (
        <HoloModal
          src={props.homepage}
          repoURL={props.repoURL}
          title={nameFormater(props.name)}
        >
          <div className={"group"}>
            <Image
              className="custom-after box-border rounded-t-lg border-2 border-white group-hover:border-cyan-500"
              src={props.homepage ? props.imgUrl : "/no-image.png"}
              alt=""
              width={350}
              height={300}
            />
            <span
              className={`block ml-2 text-white group-hover:text-cyan-400 ${orbitron.className}`}
            >
              Hologram
            </span>
          </div>
        </HoloModal>
      )) || (
        <img
          className="bg rounded-t-lg max-h-[180px] max-w-full w-full"
          src={props.homepage ? props.imgUrl : "/no-image.png"}
          alt=""
        />
      )}
      <div className="p-5 text-center ">
        <h5
          className={`mb-2 text-2xl font-bold tracking-tight dark:text-white ${orbitron.className}`}
        >
          {nameFormater(props.name)}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className={"block text-center py-2"}>
          {!props.homepage && (
            <Link
              href={props.repoURL}
              target={"_blank"}
              className="mx-auto hover:bg-neutral-900 focus:ring-primary-300 dark:bg-white dark:hover:bg-neutral-900 dark:focus:ring-primary-800 rounded bg-blue-700 px-5 py-3 text-center text-sm font-medium text-black hover:text-white focus:outline-none focus:ring-4 sm:w-fit transition-colors duration-300"
            >
              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
