import { ProjectList } from '@/app/components/ProjectList';
import { ContactForm } from '@/app/components/ContactForm';
import { ParallaxHeader } from '@/app/components/ParallaxHeader';
import { NavBar } from '@/app/components/NavBar';
import { AboutComponent } from '@/app/components/AboutComponent';
import { Projects } from '@/app/components/Projects';
import {orbitron} from "@/app/utils/fonts";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <ParallaxHeader></ParallaxHeader>
      <AboutComponent></AboutComponent>
      <Projects />
      <ContactForm></ContactForm>
      <div
        className={'bg-blue h-40 w-screen bg-white dark:bg-gray-900 mt-0'}
        id={'footer-placeholder'}
      ><p className={` text-center text-white`}>Copyright © 2023 Cedric Aoun, All Rights Reserved</p></div>
    </>
  );
}
