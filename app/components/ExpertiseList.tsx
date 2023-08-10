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
      <div className={'scroll-color mx-auto flex justify-center gap-12 flex-wrap'}>
        {expertise.map((exp, index) => {
          return <div key={`devicon-${index}`} className={'flex justify-center flex-col text-center'}>
            <label className={'text-white'}>{exp}</label>
            <img alt={exp} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${exp}/${exp}-${exp == 'tailwindcss' ? 'plain': 'original'}.svg`} className={'h-12'}/>
          </div>
        })}
      </div>
    </>
  );
};
