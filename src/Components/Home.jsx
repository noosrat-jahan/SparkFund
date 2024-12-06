import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";


const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <div>
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
            />

        </div>
    );
};

export default Home;