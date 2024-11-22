
import { FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiPostgresql, SiMicrosoftazure, SiTailwindcss, SiChakraui, SiSass } from 'react-icons/si';
import Icon from '@mdi/react';
import { mdiMaterialUi } from '@mdi/js';
import '../Styles/Technologies.css';

const technologies = [
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Drizzle ORM', icon: <FaDatabase className="text-gray-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'SQL', icon: <FaDatabase className="text-gray-500" /> },
  { name: 'Azure', icon: <SiMicrosoftazure className="text-blue-700" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Material UI', icon: <Icon path={mdiMaterialUi} size={2} className="text-blue-400" /> },
  { name: 'Chakra UI', icon: <SiChakraui className="text-teal-500" /> },
  { name: 'SCSS', icon: <SiSass className="text-pink-400" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
  {name: 'React', icon: <FaReact className="text-blue-400" /> }
];

const Technologies = () => {
  return (
    <div className=" text-white min-h-full p-8">
      <div className="container mx-auto">
        <div className="text-center items-center pb-8">
          <p className="text-3xl md:text-4xl font-bold mb-4 text-White  dark:text-yellow-400">{'Technologies { }'}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="relative tech-card bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center  hover:text-white transition-all duration-300">
              <div className="text-6xl mb-4">
                {tech.icon}
              </div>
              <div className="tech-name absolute bottom-0 transform translate-y-full opacity-0 transition-all duration-300">
                <p className="text-xl font-bold">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
