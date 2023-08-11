import 'devicon/devicon.min.css'
import {frontExp} from "@/app/utils/ExpertiseUtil";

export const ExpertiseList = () => {
    const expertise: string[] = [
        'HTML5',
        'CSS3',
        'Javascript',
        'Typescript',
        'NodeJS',
        'express',
        'React',
        'AngularJS',
        'Flutter',
        'SocketIO',
        'MaterialUI',
        'jQuery',
        'Bootstrap',
        'MySQL',
        'MongoDB',
        'Wordpress',
        'Docker',
        'TailwindCSS',
        'Unity',
        'Photoshop'
    ];


    return (
        <>
            <div
                className={'scroll-color mx-auto flex justify-center gap-12 flex-wrap rounded px-4 py-8 shadow-inner shadow-gray-900'}>
                {expertise.map((exp, index) => {
                    return (
                        <div key={`devicon-${index}`} className={'flex justify-center flex-col text-center'}>
                            <label className={'text-white'}>{exp}</label>

                            <i className={`devicon-${exp.toLowerCase()}-plain ${exp.toLowerCase() === 'express' || exp.toLowerCase() === 'unity' ? `devicon-${exp.toLowerCase()}-original` : ''} text-white text-4xl `}
                               color={'white'}></i>
                        </div>)
                })}
            </div>
        </>
    );
};
