export const ExpertiseList = () => {
  const expertise: string[] = [
    'HTML',
    'CSS',
    'JS',
    'NodeJS',
    'express',
    'ReactJS',
    'SocketIO',
    'MaterialUI',
    'jQuery',
    'Bootstrap',
    'MySQL(MySQL Workbench, WAMP)',
    'MongoDB',
    'Wordpress',
    'Docker',
    'NextJS',
    'Puppeteer',
    'Tailwind',
    'Flowbite',
  ];

  return (
    <>
      <div className={'scroll-color mx-auto max-w-[200px] bg-gray-400'}>
        <ul
          className={
            'max-h-[190px] overflow-scroll rounded border-2 text-center text-black dark:text-white'
          }
        >
          {expertise.map((exp, index) => (
            <li
              key={index}
              className={' border-b-2 border-black p-2 dark:border-white'}
            >
              {exp}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
