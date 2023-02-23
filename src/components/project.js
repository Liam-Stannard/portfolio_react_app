import {AiFillGithub} from "react-icons/ai"

export default function Project({project}) {


    /*style={{backgroundImage: "url(" + project.image + ")"}}*/

    return(
        <div className="projects-project" > 
            <h2>{project.title + '.'}</h2>
            <div className="projects-project-content">
            <p className="projects-project-description">{project.description}</p>
                <ul className="projects-project-builtWith">
                {project.builtWith && project.builtWith.map((tool, index) => 
                    <li key={index} className="projects-project-tool">
                        {tool}
                    </li>)}

                </ul>
            </div>
            <div className="projects-project-links">
                <a href={project.github} target='_blank' rel="noreferrer" className='projects-project-link'>
                    <AiFillGithub  size={42} className='projects-project-icon'/>
                </a>
             </div>
        </div>
    );
    
}