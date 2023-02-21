import '../css/contact.css';

import ContactForm from '../components/contactForm';
import ContactDetails from '../components/contactDetails';
import Page from "./page";

const Contact = ({ contactInfo }) => {
  return (
    <Page content={
      <div className='contact-page'>
        <h1>Contact.</h1>
        <div className='contact-page-content'>
          <ContactDetails contactInfo={contactInfo} />
          <ContactForm />
        </div>
      </div>
    } />
  )
};

export default Contact;