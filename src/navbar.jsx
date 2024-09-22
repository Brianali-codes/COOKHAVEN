import Logo from './assets/logo.png'
import DM from './assets/night-mode.png'
import React, { useState, useEffect } from 'react';
import './index.js'

export default function Navbar(){

    const [darkMode, setDarkMode] = useState(false);

  // Effect to apply or remove the 'dark' class on the <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

    return(
    
    <div id='NAVBAR' className='bg-white dark:bg-black'>

        <img src={Logo} alt="Logo" className='w-10' id='LG'/>

        <div className='button-container flex flex-row gap-5' id='B-C'>
            <a href="#Home"><button className='bg-white dark:bg-transparent text-black dark:text-white dark:hover:text-black'>Home</button></a>
            <a href="#FOOTER"><button className='bg-white dark:bg-transparent text-black dark:text-white dark:hover:text-black'>About</button></a> 
            <a href="https://github.com/gamerfunky78" target='_blank'><button className='bg-white dark:bg-transparent text-black dark:text-white dark:hover:text-black'>Github</button></a>
        </div>
        <img src={DM} alt="DarkMode" className='w-10 dark:bg-black' id='DM' onClick={() => setDarkMode(!darkMode)} />
    </div>


    )
}


