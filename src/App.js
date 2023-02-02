import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout'
import Home from './pages/home'
import Contact from './pages/contact'
import Projects from './pages/projects'
import About from './pages/about'
import NotFound from './pages/notFound'

function App() {

  let name = "Liam Stannard"
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home name={name}/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
