import Image from 'next/image';
import { LanguageSelector } from '@/app/components/LanguageSelector';
import { ProjectList } from '@/app/components/ProjectList';
import { ContactForm } from '@/app/components/ContactForm';
import { HeaderIntro } from '@/app/components/HeaderIntro';
import { ParallaxHeader } from '@/app/components/ParallaxHeader';
import { NavBar } from '@/app/components/NavBar';
import { ConsoleMonitor } from '@/app/components/ConsoleMonitor';

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <ParallaxHeader></ParallaxHeader>
      {/*<ConsoleMonitor></ConsoleMonitor>*/}
      <ProjectList />
      <ContactForm></ContactForm>
    </>
  );
}
