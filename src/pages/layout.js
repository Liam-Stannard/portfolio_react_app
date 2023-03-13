import Navbar from "../components/navbar";
import Home from './home'
import Contact from './contact'
import Projects from './projects'
import About from './about'
import '../css/layout.css'
//Home Data
let name = "Liam Stannard";

//Contact Data 
let contactInfo = {
  city:   "Darlington",
  email: "liamstannard1@outlook.com",
  linkedin: "https://www.linkedin.com/in/liam-stannard-101666154/",
  github: "https://github.com/Liam-Stannard"
};

//Projects Data
const testImage = "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const revisionFrontend = { 
  title: "RQ Frontend",
  description: "A web application to create revision materials. Create and edit groups of questions and take them as tests.",
  builtWith: ["React", "MaterialUI"],
  image: testImage,
  github: "https://github.com/Liam-Stannard/revision_frontend"
};

const revisionBackend = { 
  title: "RQ Backend",
  description: "A restful API built for user management and providing content when receiving an authenticated request.",
  builtWith: ["Django REST Framework", "Simple JWT"],
  image: testImage,
  github: "https://github.com/Liam-Stannard/revision_backend"
};

const portfolio = {
  title: "Portfolio Website",
  description: "A web application hosted on Azure. Content is dynamically added to each page so adding or removing content is easy with the help of Azure CI/CD pipelines.",
  builtWith: ["React", "Azure Static Web Apps", "Azure CI/CD Pipelines"],
  image: testImage,
  github: "https://github.com/Liam-Stannard/portfolio_react_app"
};

const projects = [revisionBackend, revisionFrontend, portfolio];

//About Data 
const skillGroupFrontend = {
  title: "Frontend",
  skills: [{title:"CSS"}, {title:"Javascript"}, {title:"React"}]
};

const skillGroupBackend = {
  title: "Backend",
  skills: [{title: "Java"}, {title:"Python"}]
};

const skillGroupOther = {
  title: "Other",
  skills: [{title: "Linux"}, {title:"Git"}]
};

const skillGroups = [skillGroupBackend, skillGroupFrontend, skillGroupOther];

const accentureStartDate = new Date("2020-04")

const employmentAccenture = {
  employer: "Accenture",
  startDate: accentureStartDate.toDateString(),
  endDate: null,
  role: "Application Development Analyst",
  callouts: ["Call outs needs to be written. ", "Delivered something", "Trained someone", "Impacted somewhere"]
}
const employments = [employmentAccenture];


const Layout = (props) => {
  return (
    <>
        <Navbar/>
        <Home name={name}/> 
        <About skillGroups={skillGroups} employments={employments}/>
        <Projects projects={projects} />
        <Contact contactInfo={contactInfo}/>
        <footer className="page-footer">I am a simple footer</footer>      
    </>
  )
};

export default Layout;