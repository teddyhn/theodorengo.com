import React from "react"
import Layout from "../layout"
import Navigation from '../components/Navigation'
import DarkModeProvider from '../context/DarkModeContext'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import GithubButton from "react-github-btn"

const IndexPage = ({ data }) => (
  <DarkModeProvider>
    <Layout>
      <Navigation />
      <div className="container">
        <section className="section">
          <div className="intro">
            <div className="lead">
              <h1>Hi, I'm Theodore Ngo <span role="img" aria-label="Peace sign">✌</span></h1>
              <p>But you can call me Teddy. I'm a software engineer building user experiences in JavaScript with an emphasis on modern web technologies.</p>
              <GithubButton href={"https://github.com/teddyhn"} data-size="large">teddyhn</GithubButton>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="projects">
            <h2>Open Source Projects</h2>
            
            <div className="project">
              <div className="project-title">
                <a href="https://herobuilds.now.sh/" target="_blank" rel="noopener noreferrer"><h3>3D Connect Four</h3></a>
                <GithubButton href={"https://github.com/teddyhn/3d-connect-four"} data-size="large">Source</GithubButton>
              </div>
              <p>Play Connect Four... in 3D!</p>
              <div className="project-screenshot">
                <a href="https://3d-connect-four.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={"https://i.gyazo.com/6850bdc7f95673df0cf74a1423ffc425.gif"} alt="3D Connect Four .gif" style={{ maxWidth: "600px" }} /></a>
                <p className="project-caption">Deployed via Netlify</p>
              </div>
              <ul className="project-tech-stack">
                <h4>Tech Stack:</h4>
                <li>JavaScript (React)</li>
                <li>Three.js</li>
                <li>Node</li>
                <li>Socket.IO</li>
              </ul>
              <ul className="project-features">
                <h4>Info:</h4>
                <li>Built full stack web app that leverages Three.js for rendering 3D graphics and Socket.IO for realtime communication between the client and server.</li>
                <li>Defined logic for various game states such as detecting when a player has won (4 pieces connected in 3D space).</li>
              </ul>
            </div>

            <div className="project">
              <div className="project-title">
                <a href="https://flask-rpg.com/" target="_blank" rel="noopener noreferrer"><h3>FlaskRPG</h3></a>
                <GithubButton href={"https://github.com/teddyhn/FlaskRPG"} data-size="large">Source</GithubButton>
              </div>
              <p>A 2D game demonstrating an algorithm that procedurally generates 4-way connected rooms.</p>
              <div className="project-screenshot">
                <a href="https://flask-rpg.com/" target="_blank" rel="noopener noreferrer"><img src={"https://i.gyazo.com/eddf1c88f472aaed4f7bb732281107ad.gif"} alt="FlaskRPG screenshot" style={{ maxWidth: "600px" }} /></a>
                <p className="project-caption">Deployed via Netlify</p>
              </div>
              <ul className="project-tech-stack">
                <h4>Tech Stack:</h4>
                <li>JavaScript (React)</li>
                <li>Redux</li>
                <li>Python (Flask)</li>
              </ul>
              <ul className="project-features">
                <h4>Info:</h4>
                <li>Sole developer for React front end, collaborated with a team of back end developer to create endpoints and deliver a minimum viable product with a deadline of one week.</li>
                <li>Contributed to Flask API to fix bugs and optimize game logic.</li>
              </ul>
            </div>

          </div> 
        </section>
      </div>
    </Layout>
  </DarkModeProvider>
)

export const query = graphql`
  query {
    file2: file(relativePath: { eq: "flaskrpg.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
