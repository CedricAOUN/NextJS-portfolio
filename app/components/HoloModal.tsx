'use client';

import { Button, CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  src: string;
  title: string;
  repoURL: string;
  children: ReactNode;
}

const customTheme: CustomFlowbiteTheme['modal'] = {
  content: {
    inner:
      'flex bg-cyan-500 bg-opacity-50 dark:bg-opacity-50  rounded-2xl text-white',
  },
};

export default function HoloModal(props: Props) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const controls = { openModal, setOpenModal };

  useEffect(() => {
    if (openModal == undefined) {
      const event = new CustomEvent('projecting-test', { detail: false });
      document.dispatchEvent(event);
    } else {
      const event = new CustomEvent('projecting-test', { detail: true });
      document.dispatchEvent(event);
    }
  }, [openModal]);

  return (
    <>
      <button onClick={() => controls.setOpenModal('modal')}>
        {props.children}
      </button>

      {controls.openModal === 'modal' && (
        <Modal
          theme={customTheme}
          dismissible
          show={controls.openModal === 'modal'}
          onClose={() => controls.setOpenModal(undefined)}
          size={'7xl'}
          className={'z-[55] bg-opacity-20'}
        >
          <div
            className={`flex h-[calc(100vh-20rem)] w-full flex-col items-center justify-center p-4`}
          >
            <h1>{props.title}</h1>
            <iframe src={props.src} width={'100%'} height={'100%'}></iframe>
            <div>
              <a href={props.src} target={'_blank'}>
                <button>Visit</button>
              </a>
              <a href={props.repoURL} target={'_blank'}>
                <button>Repo</button>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
