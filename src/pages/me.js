import React from "react"
import { Link } from "gatsby"
import DarkModeProvider from "../context/DarkModeContext"
import Layout from "../layout"
import Navigation from '../components/Navigation'

const AboutPage = () => (
    <DarkModeProvider>
        <Layout>
            <Navigation />
            <div className="container">
                <section className="section">
                    <div className="about-me">
                        <h1>About me</h1>
                        <p>I'm Theodore Ngo, but you can call me Teddy. I'm a software developer living in San Jose, CA but willing to relocate just about anywhere. I work primarily in React to build great user experiences. I'm continually learning, and that includes new (to me) technologies!</p>
                        <p>After graduating from UC Santa Barbara with a degree in Biopsychology, I decided to forgo studying the intricate systems of the brain to study the intricate systems of software development. I enrolled in Lambda School, where I learn full stack web development and computer science remotely. When I'm not developing, I like to chat with friends over Discord, play online collectible card games, and turn dark mode on on every app I use. Interested in what I can do? <Link to="/contact">Get in touch.</Link></p>
                    </div>
                </section>
                <section className="section">
                    <div className="stuff-i-use">
                        <h2>Stuff I use</h2>
                        <ul>
                            <li>OS: Windows 10 Education</li>
                            <li>Editor: VS Code</li>
                            <li>Monitor(s): BenQ XL2546 & MSI G24C</li>
                            <li>Keyboard: Leopold FC660C</li>
                            <li>Headphones: Sennheiser HD660 S & AirPods Pro</li>
                        </ul>
                    </div>
                </section>
                <section className="section">
                    <div className="resume">
                        <h2>Looking for a resume?</h2>
                        <p>
                            You can find it <a href="https://docs.google.com/document/d/1Ri-Brva8LjrTxsQVMT8OK0WQXsVud8ZFuQmf4kac0vs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here.</a>  
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    </DarkModeProvider>
)

export default AboutPage;