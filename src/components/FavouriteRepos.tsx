import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../Styles/FavoriteRepos.css';

interface Repo {
  title: string;
  description: string;
  repoLink: string;
}

const FavoriteRepos: React.FC = () => {
  const repos: Repo[] = [
    {
      title: '30_DAYS_0F_CODING_CHALLENGE </>',
      description: 'This Repository contains all the code challenges and projects I have worked on during the 30 days of code challenge, the code is well documented and easy to understand, feel free to check it out.',
      repoLink:'https://github.com/John-Mukhwana/30_DAYS_0F_CODING_CHALLENGE'
    },
    {
      title: 'Vehicle-Rental-Management-System-BACKEND </>',
      description: 'This is the backend of the Vehicle Rental Management System, it is developed with Nodejs, Hono,Drizzle ORM ,Typescript, and PostgresSQL.The Backend Provided the API endpoints for the frontend to consume.',
      repoLink: 'https://github.com/John-Mukhwana/Vehicle-Rental-Management-System-BACKEND'
    },
    {
      title: 'REST-COUNTRIES-API ',
      description: 'This is a simple REST Countries API project that allows users to search for countries and view details about them. I learned how to fetch data from an API and display it on the page using Javascript.',
      repoLink: 'https://github.com/yourusername/low-level-programming'
    },
    {
      title: 'HackTheBox-CTF-Writeups ',
      description: 'This Repository contains all the writeups for the HackTheBox Capture The Flag Challenges.This cheasheet is aimed at the CTF Players and Beginners to help them sort Hack The Box Labs on the basis of Operating System and Difficulty.',
      repoLink: 'https://github.com/John-Mukhwana/HackTheBox-CTF-Writeups'
    },
    
    
    // Add more repositories here
  ];

  return (
    <div className="p-6">
      <h2 className="text-4xl text-center font-semibold text-white dark:text-yellow-400 mb-6">{'Favourite Repos { }'}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {repos.map((repo, index) => (
          <div key={index} className="repo-card bg-gray-800 text-white rounded-lg shadow-lg max-w-xs">
            <div className="repo-icon-container">
              <FaGithub className="repo-icon" size={32} />
            </div>
            <div className="repo-title-container">
              <h3 className="textarea-x font-semibold">{repo.title}</h3>
              <div className="repo-border"></div>
            </div>
            <p className="text-center text-sm mb-4">{repo.description}</p>
            <a 
              href={repo.repoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-green-400 hover:bg-yellow-400 dark:hover:bg-green-600  dark:bg-yellow-500 text-black py-2 px-4 rounded-lg font-semibold text-center mx-auto max-w-fit"
            >
              Visit Repo &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteRepos;
