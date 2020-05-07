import React, { createContext } from "react"
import useLocalStorage from '../hooks/useLocalStorage'

export const DarkModeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {},
});


export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', false);

    function toggleDarkMode() {
        setDarkMode(darkMode => !darkMode);
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider;
