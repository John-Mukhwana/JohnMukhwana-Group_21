

import { FaGraduationCap, FaCalendarAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import '../Styles/Education.css';

const education = [
  {
    institution: 'Khasoko School',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1723024781/mlyyuspmfm3ha30fu0gg.jpg',
    startYear: '2018',
    endYear: '2021',
    course: 'Kenya Certificate of Secondary Education',
    status: 'Graduated'
  },
  {
    institution: 'Kirinyaga University',
    image: 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1723024628/cny7v2ce8z10j6ishjuo.jpg',
    startYear: '2022',
    endYear: '2026',
    course: 'Bachelor of Science in Software Engineering',
    status: 'Continuing'
  }
];

const Education = () => {
  return (
    <div className=" text-white min-h-full p-8 ">
      <div className="container mx-auto">
        <div className="text-center items-center pb-8 mt-10">
          <p className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-yellow-400">{'Education { }'}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-8">
          {education.map((edu, index) => (
            <div key={index} className="relative education-card-container">
              <div className="absolute inset-0 bg-yellow-500 dark:bg-green-500 rounded-lg opacity-10 transform rotate-6 translate-y-4 translate-x-4 hover:bg-green-600 transition-all duration-300"></div>
              <div className="relative education-card bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img src={edu.image} alt={edu.institution} className="w-full h-48 object-cover rounded-t-lg border-b-2 border-green-400 dark:border-yellow-400 hover:border-yellow-400 dark:hover:border-green-400" />
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-green-400 dark:text-yellow-400">{edu.institution}</h3>
                  <div className="text-cyan-300 dark:text-yellow-400 flex items-center my-2">
                    <FaCalendarAlt className="mr-2" />
                    {edu.startYear} - {edu.endYear}
                  </div>
                  <div className="text-gray-300 flex items-center">
                    <FaGraduationCap className="mr-2" />
                    {edu.course}
                  </div>
                  <div className="flex items-center my-2">
                    {edu.status === 'Graduated' ? (
                      <div className="bg-green-500 text-black px-3 py-1 rounded-full flex items-center">
                        <FaCheckCircle className="mr-2" /> Graduated
                      </div>
                    ) : (
                      <div className="bg-yellow-500 text-black px-3 py-1 rounded-full flex items-center">
                        <FaSpinner className="mr-2" /> Continuing
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
