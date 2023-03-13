import '../css/contact.css';

import ContactForm from '../components/contactForm';
import ContactDetails from '../components/contactDetails';
import Section from "./section";

const Contact = ({ contactInfo }) => {
  return (
    <Section content={
      <div className='contact-section' id='contact-section'>
        <h1>Contact.</h1>
        <div className='contact-section-content'>
          <ContactDetails contactInfo={contactInfo} />
          <ContactForm />
        </div>
      </div>
    } />
  )
};

export default Contact;