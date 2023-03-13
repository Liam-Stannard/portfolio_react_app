import Section from "./section";
import '../css/home.css'

const Home = (props) => {
  return (
    <Section content={
    <div className='home-section' id='home-section'>
      <h1 className='home-title'>I'm {props.name}. <span className='home-accent'>A Software Developer.</span></h1>
    </div>}/>
  )
};

export default Home;