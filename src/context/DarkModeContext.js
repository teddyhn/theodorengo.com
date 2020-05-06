import React, { createContext, useState } from "react";

export const DarkModeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {},
});


export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(darkMode => !darkMode);
    }

    return (
        <DarkModeContext.Provider value= {{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}
