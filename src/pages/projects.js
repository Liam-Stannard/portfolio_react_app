import Section from "./section";
import Project from "../components/project";
import '../css/projects.css'

const Projects = (props) => {
  console.log(props.projects)
  return (
    <Section content={
      <section className='projects-section' id='projects-section'>
        <h1>Projects.</h1>
        <ul className="projects-projects-wrapper">
        {props.projects && props.projects.map((project, index) => 
        <li key={index} className="projects-project-wrapper">
          <Project project={project}/>
        </li>)}

        </ul>
      </section>
    }/>
  )
};

export default Projects;