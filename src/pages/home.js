import Page from "./page";
import '../css/home.css'

const Home = (props) => {
  return (
    <Page content={
    <div className='home-page'>
      <h1 className='home-title'>I'm {props.name}. <span className='home-accent'>A Software Developer.</span></h1>
    </div>}/>
  )
};

export default Home;