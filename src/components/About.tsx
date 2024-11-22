import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className=" text-white min-h-full flex items-center justify-center">
        
      <div className="container mx-auto p-4 md:p-8">
        <div className='items-center justify-center pt-4 pb-8'>
      <p className=" text-center text-3xl md:text-4xl font-bold mb-4 text-white dark:text-yellow-400"> {'About Me { }'} </p>
      </div>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Card Section */}
          <div className="relative mb-8 md:mb-0 md:mr-8">
            <div className="absolute inset-0 bg-green-400 dark:text-yellow-400 rounded-lg blur-lg opacity-50"></div>
            <div className="absolute inset-0 bg-gray-700 rounded-lg transform rotate-3"></div>
            <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 md:p-12">
              <h2 className="text-3xl md:text-xl  font-bold mb-4 text-green-400 dark:text-yellow-400">
                {'<Tech-Checkmate/>'}</h2>
            </div>
          </div>
          {/* About Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-12 w-full md:w-2/3">
            <p className="text-3xl md:text-4xl font-bold mb-4 text-green-400 dark:text-yellow-400"> {'About Me '} </p>
            <div className="border-b-2 border-green-400 dark:border-yellow-400 w-24 mb-6"></div>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Hello! I'm John Bradill Mukhwana, a passionate Software Engineering student at Kirinyaga University with a keen interest in creating dynamic and responsive web applications. Trained as a Fullstack Developer by Teach2Give, I have a strong background in both front-end and back-end development. I thrive on building projects that make a difference and love exploring new technologies while continuously learning to improve my skills.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
            My journey in software engineering and development began with a fascination for how technology works and has evolved into a career where I tackle real-world challenges through code. I thrive on collaboration and believe that teamwork is crucial for crafting impactful solutions. Outside of work, I enjoy exploring new places, reading tech blogs, and indulging in a good book.
            </p>
            <Link to ="Contact-Me" className="inline-block px-8 py-3 bg-blue-400 dark:bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-green-400 transition duration-300">
             Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
