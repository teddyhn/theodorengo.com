import React from "react"
import Layout from "../layout"
import Navigation from '../components/Navigation'
import DarkModeProvider from '../context/DarkModeContext'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import GithubButton from "react-github-btn"
import react from '../images/react.svg'
import javascript from '../images/javascript.svg'
import redux from '../images/redux.svg'
import next from '../images/next-dot-js.svg'
import gatsby from '../images/gatsby.svg'
import node from '../images/node-dot-js.svg'
import postgresql from '../images/postgresql.svg'
import python from '../images/python.svg'
import bootstrap from '../images/bootstrap.svg'
import sass from '../images/sass.svg'

const IndexPage = ({ data }) => (
  <DarkModeProvider>
    <Layout>
      <Navigation />
      <div className="container">
        <section className="section">
          <div className="intro">
            <div className="lead">
              <h1>Hi, I'm Theodore Ngo <span role="img" aria-label="Peace sign">✌</span></h1>
              <p>But I go by Teddy. I'm a software developer specializing in JavaScript. Currently looking for opportunities!</p>
              <GithubButton href={"https://github.com/teddyhn"} data-size="large">teddyhn</GithubButton>
            </div>
            <Img style={{ borderRadius: '50%' }} fixed={data.file1.childImageSharp.fixed} alt="Teddy" />
          </div>
        </section>
        <section className="section">
          <div className="skills">
            <h2>Languages, Frameworks, & Libraries</h2>
            <p>A noncomprehensive list of the tools I've picked up along the way (in no particular order):</p>
            <div className="toolbox">
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#F7DF1E', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={javascript} className="skill-icon" alt="JavaScript icon" />
                </div>
                <span>JavaScript</span>
              </div>
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#61DAFB', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={react} className="skill-icon" alt="React icon" />
                </div>
                <span>React</span>
              </div>
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#764ABC', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={redux} className="skill-icon" alt="Redux icon" />
                </div>
                <span>Redux</span>
              </div>
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#000000', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={next} className="skill-icon" alt="Next.js icon" />
                </div>
                <span>Next.js</span>
              </div>
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#663399', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={gatsby} className="skill-icon" alt="Gatsby icon" />
                </div>
                <span>Gatsby</span>
              </div>
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#CC6699', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={sass} className="skill-icon" alt="Sass icon" />
                </div>
                <span>Sass</span>
              </div>
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#339933', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={node} className="skill-icon" alt="Node.js icon" />
                </div>
                <span>Node.js</span>
              </div>
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#336791', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={postgresql} className="skill-icon" alt="PostgreSQL icon" />
                </div>
                <span>PostgreSQL</span>
              </div>
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#3776AB', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={python} className="skill-icon" alt="Python icon" />
                </div>
                <span>Python</span>
              </div>
              <div className="skill-container">
                <div style={{ boxSizing: 'content-box', background: '#563D7C', padding: '6px', width: 'fit-content', height: '20px', borderRadius: '5px' }}>
                  <img src={bootstrap} className="skill-icon" alt="Bootstrap icon" />
                </div>
                <span>Bootstrap</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="projects">
            <h2>Open Source Projects</h2>
            <div className="project">
              <div className="project-title">
                <a href="https://flask-rpg.com/" target="_blank" rel="noopener noreferrer"><h3>FlaskRPG</h3></a>
                <GithubButton href={"https://github.com/teddyhn/FlaskRPG"} data-size="large">Source</GithubButton>
              </div>
              <p>A front end client/game interface I built for a Flask API that demonstrates a room generation algorithm in a game appropriately titled FlaskRPG.</p>
              <div className="project-screenshot">
                <a href="https://flask-rpg.com/" target="_blank" rel="noopener noreferrer"><Img style={{ maxWidth: '600px', margin: '0 auto' }} fluid={data.file2.childImageSharp.fluid} alt="FlaskRPG screenshot" /></a>
                <p className="project-caption">Deployed via Netlify</p>
              </div>
              <ul className="project-tech-stack">
                <h4>Tech stack & info:</h4>
                <li>React, Redux, and Canvas API for animations</li>
                <li>Interfaced with Flask API to create seamless game UI for room traversal, among other game functions</li>
              </ul>
              <ul className="project-features">
                <h4>Features:</h4>
                <li>Search mushrooms and tree stumps for loot</li>
                <li>Player character walking animations</li>
                <li>Buy and sell goods from Flask (he's very nice)</li>
                <li>Aimlessly traverse across the many rooms the dungeon has to offer</li>
              </ul>
            </div>
            <div className="project">
              <div className="project-title">
                <a href="https://herobuilds.now.sh/" target="_blank" rel="noopener noreferrer"><h3>HeroBuilds</h3></a>
                <GithubButton href={"https://github.com/teddyhn/herobuilds"} data-size="large">Source</GithubButton>
              </div>
              <p>A quick statistics reference tool for the multiplayer online battle arena Heroes of the Storm.</p>
              <div className="project-screenshot">
                <a href="https://herobuilds.now.sh/" target="_blank" rel="noopener noreferrer"><Img style={{ maxWidth: '600px', margin: '0 auto' }} fluid={data.file3.childImageSharp.fluid} alt="HeroBuilds screenshot" /></a>
                <p className="project-caption">Deployed via Vercel</p>
              </div>
              <ul className="project-tech-stack">
                <h4>Tech stack & info:</h4>
                <li>Next.js (React), Redux</li>
                <li>Developed an intuitive, modern UI to display game statistics</li>
                <li>Utilized server-side rendering to increase performance</li>
              </ul>
              <ul className="project-features">
                <h4>Features:</h4>
                <li>Typeahead-like searching and filtering of data</li>
                <li>View global and Hero-specific statistics: win rate, popularity, number of games played, etc.</li>
                <li>Sort global Hero data by various parameters</li>
                <li>Export the most popular Talent builds for every Hero right to your game</li>
              </ul>
            </div>
            <div className="project">
              <div className="project-title">
                <a href="https://github.com/teddyhn/herobuilds-api" target="_blank" rel="noopener noreferrer"><h3>HeroBuilds API</h3></a>
                <GithubButton href={"https://github.com/teddyhn/herobuilds-api"} data-size="large">Source</GithubButton>
              </div>
              <p>The accompanying API for HeroBuilds. Deployed via Heroku.</p>
              <ul className="project-tech-stack">
                <h4>Tech stack & info:</h4>
                <li>Node.js, Express.js, Puppeteer</li>
                <li>Developed database-less API to scrape and cache data for HeroBuilds</li>
                <li>Created endpoints to consume data specfic for HeroBuilds use case</li>
              </ul>
              <ul className="project-features">
                <h4>Features:</h4>
                <li>Puppeteer runs a headless browser that accesses the appropriate pages to allow for data scraping</li>
                <li>Data is cached in .txt files to prevent too many requests to the site being scraped</li>
                <li>Uses node-cron task scheduler to periodically update cached data</li>
              </ul>
            </div>
            <div className="project">
              <div className="project-title">
                <a href="https://github.com/DevDesk-Queue-bw/back-end" target="_blank" rel="noopener noreferrer"><h3>DevDesk Queue Back End</h3></a>
                <GithubButton href={"https://github.com/DevDesk-Queue-bw/back-end"} data-size="large">Source</GithubButton>
              </div>
              <p>A robust help desk ticket system. Deployed via Heroku.</p>
              <ul className="project-tech-stack">
                <h4>Tech stack & info:</h4>
                <li>Node.js, Express.js, PostgresQL, Knex</li>
                <li>Architected database and developed back end API using Knex as the query builder</li>
              </ul>
              <ul className="project-features">
                <h4>Features:</h4>
                <li>Comprehensive API documentation</li>
                <li>User log in and registration with roles</li>
                <li>RESTful API architecture for ticket manipulation</li>
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
    file1: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    file2: file(relativePath: { eq: "flaskrpg.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file3: file(relativePath: { eq: "herobuilds.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
