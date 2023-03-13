import '../css/section.css'

const Section = (props) => {
    return (
      <div className='section-container'>
      <section className='section-main'>
        <div className="section-margin"></div>
        <div className='section-content'>{props.content}</div>
        <div className="section-margin"></div>
      </section>
      </div>
    )
  };
  
  export default Section;