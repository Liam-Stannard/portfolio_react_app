import Page from "./page";

import '../css/about.css'

const About = (props) => {
  return (
    <Page content={
    <div className='about-page'>
        <h1>About</h1>
        <div className="about-skills">
          <h2>Skills</h2>  
          <div className="about-skills-boxes">
          <div className="about-skills-backend"><h3>Backend</h3>
          <ul className='about-skills-list'>
            <li>Java</li>

            <li>Python</li>

          </ul>
          
          </div>
          <div className="about-skills-frontend"><h3>Frontend</h3>
          <ul className='about-skills-list'>
            <li>HTML</li>

            <li>CSS</li>

            <li>Javascript</li>

            <li>React</li>

          </ul>
          </div>

          <div className="about-skills-tools"><h3>Other Tools</h3>
          <ul className='about-skills-list'> 
            <li>VS Code</li>

            <li>Git</li>

            <li>Linux</li>

            <li>React</li>

          </ul>
          </div>
          </div>
        </div>
    </div>}/>
  )
};

export default About;