import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout'
import Home from './pages/home'
import Contact from './pages/contact'
import Projects from './pages/projects'
import About from './pages/about'
import NotFound from './pages/notFound'

function App() {

  const name = "Liam Stannard";

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

  const employments = [employmentAccenture]


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home name={name}/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About skillGroups={skillGroups} employments={employments}/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
