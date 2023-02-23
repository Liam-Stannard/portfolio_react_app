import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout'
import Home from './pages/home'
import Contact from './pages/contact'
import Projects from './pages/projects'
import About from './pages/about'
import NotFound from './pages/notFound'

function App() {

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

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home name={name}/>} />
          <Route path="contact" element={<Contact contactInfo={contactInfo}/>} />
          <Route path="projects" element={<Projects projects={projects} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
