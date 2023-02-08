import '../css/contact.css';

import ContactForm from '../components/contactForm';
import ContactDetails from '../components/contactDetails';

const Contact = ({contactInfo}) => {
  return (
    <section className='contact-page'>
      <h1>Contact.</h1>
      <div className='contact-page-content'>
          <ContactDetails contactInfo={contactInfo}/>
          <ContactForm/>
      </div>
    </section>)
};

export default Contact;