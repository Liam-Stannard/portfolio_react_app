import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import '../css/layout.css'
const Layout = (props) => {
  return (
    <>
        <Navbar/>
        <div className="nav-offset"/>
        <div className="main">
        <Outlet />
        </div>
        <div className="footer"></div>
    </>
  )
};

export default Layout;