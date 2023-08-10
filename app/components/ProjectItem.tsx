'use client';
import Link from 'next/link';
import HoloModal from '@/app/components/HoloModal';
import { useState } from 'react';
import {orbitron} from "@/app/utils/fonts";

interface Props {
  name: string;
  imgUrl: string;
  description: string;
  homepage: string;
  repoURL: string;
}

export const ProjectItem = (props: Props) => {
  function nameFormater(name: string) {
    let spaced = name.replaceAll('-', ' ');

    return spaced.slice(0, 1).toUpperCase() + spaced.slice(1, spaced.length);
  }

  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleOpen() {
    if (!openModal) {
      setOpenModal(true);
    }
  }

  function handleClose() {
    if (openModal) {
      setOpenModal(false);
      const event = new CustomEvent('projecting-test', { detail: false });
      document.dispatchEvent(event);
    }
  }

  return (
    <div className='max-w-[20rem] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 '>
      {(props.homepage && (
        <HoloModal
          src={props.homepage}
          repoURL={props.repoURL}
          title={nameFormater(props.name)}
        >
          <div className={'group'}>
            <img
              className=' custom-after box-border rounded-t-lg border-2 border-transparent group-hover:border-cyan-500'
              src={props.homepage ? props.imgUrl : '/no-image.png'}
              alt=''
            />
            <span className={`absolute hidden text-cyan-400 group-hover:block ${orbitron.className}`}>
              Hologram
            </span>
          </div>
        </HoloModal>
      )) || (
        <img
          className='bg rounded-t-lg'
          src={props.homepage ? props.imgUrl : '/no-image.png'}
          alt=''
        />
      )}
      <div className='p-5'>
        <h5 className={`mb-2 text-2xl font-bold tracking-tight dark:text-white ${orbitron.className}`}>
          {nameFormater(props.name)}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {props.description}
        </p>
        <div className={'block'}>
          {props.homepage ? (
            <Link
              href={props.homepage ? props.homepage : ''}
              target={'_blank'}
              className={`
              mx-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            `}
            >
              Visit
            </Link>
          ) : null}
          <Link
            href={props.repoURL}
            target={'_blank'}
            className='mx-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Repo
          </Link>
        </div>
      </div>
    </div>
  );
};
