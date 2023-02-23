import '../css/skillGroup.css'

function SkillGroup({skillGroup}) {
    return (
        <div className="about-skill-group-wrapper">
          <h3>{skillGroup.title + '.'}</h3>
          <ul className='about-skill-group'>
            {skillGroup.skills && skillGroup.skills.map((skill, index) => 
              <li key={index}>
                {skill.title}
              </li>)
            }
          </ul>
        </div>
    );
}

export default SkillGroup;