import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import { DarkModeContext } from "../context/DarkModeContext";

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    const navOnScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navOnScroll)

        return () => {
            window.removeEventListener('scroll', navOnScroll)
        }
    }, [scrolled])

    return (
        <nav className={`nav ${scrolled ? 'scroll' : ''}`}>
            <div className="nav-container">
                <div className="links">
                    <Link to="/">About</Link>
                    <Link to="/">Get in touch</Link>
                    <button
                        className="dark-mode-toggle"
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? <span role="img" aria-label="Sun with face emoji">🌞</span> : <span role="img" aria-label="Moon with face emoji">🌚</span>}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;