

import { useState, useEffect } from 'react';

const useDarkMode =() =>{

    const [darkMode,setDarkMode] =useState(() =>{

    //check if we have a theme stored in local storage
    const savedMode =localStorage.getItem('darkMode');
    return savedMode !==null ? JSON.parse(savedMode) :false;
    });


    useEffect( () =>{
     
        if (darkMode){
           document.documentElement.classList.add('dark');   
        }
        else{
          document.documentElement.classList.remove('dark');      
        }

        //save the theme to local storage
        localStorage.setItem('darkMode',JSON.stringify(darkMode));
},[darkMode]);

const toggleDarkMode =() =>{
    setDarkMode(!darkMode);
};

return [darkMode,toggleDarkMode];
};
export default useDarkMode;