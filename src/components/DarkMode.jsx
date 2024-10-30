import React, { useEffect, useState } from 'react';

import Imgrecension1 from '../assets/Logos/recension1.svg'
import Imgrecension2 from '../assets/Logos/recension2.svg'
import Imgdark from '../assets/Logos/recension1-dark.svg'
import Imgdark2 from '../assets/Logos/recension2-dark.svg'
import Silicondark from '../assets/Logos/Link-dark.svg'
import Siliconlight from '../assets/Logos/Link.svg'

    
  const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode)

        if(newMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if(savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkMode(true)
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            setIsDarkMode(false)
        }

        const recension1 = document.getElementById('recension1');
        if (recension1) {
            recension1.src = isDarkMode ? Imgdark : Imgrecension1;
        }
        const recension2 = document.getElementById('recension2');
        if (recension2) {
            recension2.src = isDarkMode ? Imgdark2 : Imgrecension2;
        }

        const logo = document.getElementById('logo');
        if (logo) {
            logo.src = isDarkMode ? Silicondark : Siliconlight;
        }

    }, [isDarkMode])

    
  
    return (
        <div className="btn-toggle-switch">
        <span className="label">Dark mode</span>
        <label htmlFor="switchMode" className="toggle-switch">
            <input
            id="switchMode"
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            />
            <span className="slider round"></span>

        </label>
    </div>
  )
}

export default DarkMode