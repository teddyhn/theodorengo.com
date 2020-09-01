import React from "react"
import { Link } from "gatsby"
import DarkModeProvider from "../context/DarkModeContext"
import Layout from "../layout"
import Navigation from '../components/Navigation'
import resumepdf from '../../static/Theodore-Ngo-Resume.pdf'

const AboutPage = () => (
    <DarkModeProvider>
        <Layout>
            <Navigation />
            <div className="container">
                <section className="section">
                    <div className="about-me">
                        <h1>About me</h1>
                        <p>I'm Teddy, a software engineer living in San Jose, CA. I work primarily in JavaScript to build performant user experiences.</p>
                        <p>After graduating from UC Santa Barbara with a degree in Biopsychology, I decided to pursue a career in software development. I enrolled in Lambda School, where I learned full stack web development and computer science remotely. When I'm not developing, I like to chat with friends over Discord, play online collectible card games, and turn dark mode on on every app I use. Interested in what I can do? <Link to="/contact">Get in touch.</Link></p>
                    </div>
                </section>
                <section className="section">
                    <div className="resume">
                        <h2>Looking for a resume?</h2>
                        <p>
                            You can find it <a href={resumepdf} target="_blank" rel="noopener noreferrer">here.</a> 
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    </DarkModeProvider>
)

export default AboutPage;