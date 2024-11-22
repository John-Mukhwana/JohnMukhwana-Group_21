
import React from 'react'; // Ensure the correct path to your image
import '../Styles/profile.css'; // Import the CSS file
import { FaDownload, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Profile: React.FC = () => {
  const icons = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",


  ];
  
  const avatar = 'https://res.cloudinary.com/dbczn8b8l/image/upload/v1721572329/rxyxql96y331qpsgo20r.jpg';

  return (
    <div className=" pt-20 pb-20  text-white min-h-full flex items-center justify-center">
      <div className="container mt-2 mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className=" typewriter text-center  md:text-left mb-28 md:mb-0">
            <p className="text-lg mb-2">Hello, I am</p>
            <h2 className="typewriter text-xl md:text-5xl  font-mono font-bold text-green-400 dark:text-yellow-400">
              {'<John Bradill Mukhwana/>'}
            </h2>
            <p className="text-2xl md:text-3xl font-semibold mt-8">Software Engineer ( )</p>
            <p className="text-2xl md:text-3xl font-semibold mt-2 mb-6">_CybersecurityEnthusiast</p>
  
            <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://github.com/John-Mukhwana" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300">
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/john-bradill-3bb656303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a href="https://wa.me/+254719312645" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300">
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=191PAhsqMtqc33J4CLziUpGYHPT5anJZm" target="_blank"  rel="noopener noreferrer "  className="download flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-300" > 
                  <FaDownload className="mr-2" /> Download My Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end relative">
            <div className="profile-container">
              <img
                src={avatar}
                alt="Avatar"
                className="profile-picture"
              />
              <div className="rotating-container">
                {icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Icon ${index + 1}`}
                    className={`icon icon-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
