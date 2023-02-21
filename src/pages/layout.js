import { Outlet} from "react-router-dom";
import Navbar from "../components/navbar";

import '../css/layout.css'
const Layout = (props) => {
  return (
    <>
        <Navbar/>
        <div className="nav-offset"/>
        <Outlet />
        
    </>
  )
};

export default Layout;