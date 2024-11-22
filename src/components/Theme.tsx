
import useDarkMode from '../store/themeHook'; // Adjust the path as necessary

const DarkMode = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="flex items-center gap-2">
      <label className="flex cursor-pointer gap-2 items-center text-sm">
        
        <input 
          type="checkbox" 
          className="toggle theme-controller " 
          checked={darkMode} 
          onChange={toggleDarkMode} 
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  )
}

export default DarkMode;
