
import { FaDesktop } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';
import { DiLinux } from 'react-icons/di';

const IconBar = () => {
  return (
    <div className="flex space-x-4 items-center">
      <FaDesktop size={30} color="white" />
      <FiCode size={30} color="white" />
      <FaGlobe size={30} color="white" />
      <DiLinux size={30} color="white" />
    </div>
  );
};

export default IconBar;
