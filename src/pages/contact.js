import React, { useState } from "react"
import DarkModeProvider from "../context/DarkModeContext"
import Layout from "../layout"
import Navigation from '../components/Navigation'


const ContactPage = () => {
    const [copied, setCopied] = useState();

    return (
        <DarkModeProvider>
            <Layout>
                <Navigation />
                <div className="container">
                    <section className="section">
                        <div className="contact">
                            <p>{copied ? copied : 'No forms or "mailto" links! Just click my email to copy to your clipboard.'}</p>
                            <p 
                                id="email"
                                onClick={() => {
                                    navigator.clipboard.writeText('tngo97@gmail.com');
                                    setCopied('Copied!')
                                }}
                            >
                                tngo97@gmail.com
                            </p>
                        </div>
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/theodore-ngo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/teddyhn" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </section>
                </div>
            </Layout>
        </DarkModeProvider>
    )
}

export default ContactPage;