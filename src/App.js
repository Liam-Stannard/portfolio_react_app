import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout'
import NotFound from './pages/notFound'

function App() {

  return (
    <div className="App">
      <Layout/> 
    </div>
  );
}

export default App;
