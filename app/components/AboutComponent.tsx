import { ExpertiseList } from '@/app/components/ExpertiseList';

export const AboutComponent = () => {
  return (
    <section className='bg-white dark:bg-gray-900' id={'about'}>
      <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
        <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
          About me
        </h2>
        <p className='mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16'>
          Currently looking for work, I'm a Web/Python developer with some
          knowledge of C# and game development with Unity. I'm mostly
          self-educated, but I also have certificates in Web Development at CNAM
          University, Paris, as well as a python course at GRETA METEHOR.
          Programming is a passion for me therefore I can learn and adapt to
          most languages, technologies, and software. My capabilities, in no
          particular order, are:
        </p>
        <ExpertiseList />
      </div>
    </section>
  );
};
