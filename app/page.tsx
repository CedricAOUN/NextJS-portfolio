import { ProjectList } from '@/app/components/ProjectList';
import { ContactForm } from '@/app/components/ContactForm';
import { ParallaxHeader } from '@/app/components/ParallaxHeader';
import { NavBar } from '@/app/components/NavBar';
import { AboutComponent } from '@/app/components/AboutComponent';
import { Projects } from '@/app/components/Projects';

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <ParallaxHeader></ParallaxHeader>
      <AboutComponent></AboutComponent>
      <Projects />
      <ContactForm></ContactForm>
      <div
        className={'bg-blue h-16 w-screen bg-white dark:bg-gray-900'}
        id={'footer-placeholder'}
      ></div>
    </>
  );
}
