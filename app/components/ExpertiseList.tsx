import 'devicon/devicon.min.css'

export const ExpertiseList = () => {
  const expertise: string[] = [
    'html5',
    'css3',
    'javascript',
    'nodejs',
    'express',
    'react',
    'socketio',
    'materialui',
    'jquery',
    'bootstrap',
    'mysql',
    'mongodb',
    'wordpress',
    'docker',
    'nextjs',
    'tailwindcss',
  ];

  return (
    <>
      <div className={'scroll-color mx-auto flex justify-center gap-12 flex-wrap rounded px-4 py-8 shadow-inner shadow-gray-900'}>
        {expertise.map((exp, index) => {
          return <div key={`devicon-${index}`} className={'flex justify-center flex-col text-center'}>
            <label className={'text-white'}>{exp}</label>

            <i className={`devicon-${exp}-plain text-white text-4xl ${exp == 'express' && 'devicon-express-original'}`} color={'white'}></i>
          </div>
        })}
      </div>
    </>
  );
};
