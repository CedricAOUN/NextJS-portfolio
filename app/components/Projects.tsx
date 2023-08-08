import { ProjectList } from '@/app/components/ProjectList';

export const Projects = () => {
  return (
    <section className='bg-white dark:bg-gray-900' id={'projects'}>
      <div className='max-w-screen mx-auto px-4 py-8 lg:py-16'>
        <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
          Projects
        </h2>
        <ProjectList></ProjectList>
      </div>
    </section>
  );
};
