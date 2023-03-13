import Section from "./section";
import SkillGroup from "../components/skillGroup"

import '../css/about.css'
import Employment from "../components/employment";

const About = (props) => {
  return (
    <Section content={
    <div className='about-section' id="about-section">
        <h1>About.</h1>
        <section className="about-skills">
          <h2>Skills.</h2>  
          <div className="about-skills-boxes-wrapper">
            <ul className="about-skills-boxes">
            {props.skillGroups && props.skillGroups.map((skillGroup, index) => 
            <li key={index} className="about-skills-box">
              <SkillGroup skillGroup={skillGroup}/>
            </li>)
            }
            </ul>
          </div>
        </section>
        <section className="about-employments">
          <h2>Employments.</h2>
          <div className="about-employments-boxes-wrapper">
          <ul className="about-employments-boxes">
            {props.employments && props.employments.map((employment, index) => 
            <li key={index} className="about-employment-box">
              <Employment employment={employment}/>
            </li>)
            }
            </ul>

          </div>
        </section>
    </div>}/>
  )
};

export default About;