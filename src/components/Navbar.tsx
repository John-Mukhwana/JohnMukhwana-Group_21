




import DarkMode from '../components/Theme';
import { MdMenu } from 'react-icons/md';

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className=" w-full gap-4 md:w-fulls">
      {/* Navbar */}
      <nav className="bg-sky-800 dark:bg-gray-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between ">
          {/* Left Side: Menu Toggle Button */}
          <button className="md:hidden text-white text-2xl" onClick={toggleSidebar}>
            <MdMenu />
          </button>
          
          {/* Logo */}
          <div className="text-2xl font-terminus font-bold flex-grow text-center md:text-left">
            <span className='text-sm font-inconsolata text-yellow-400 dark:text-green-400'>_The</span>
            <span className="text-green-400 dark:text-yellow-400">John</span>
            <span className="text-white">Bradley</span>
          </div>
          
          {/* Right Side: Dark Mode Toggle */}
          <div className="flex items-center ">
            <DarkMode />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;