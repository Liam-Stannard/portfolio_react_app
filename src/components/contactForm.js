

import { useState } from 'react';
import '../css/contactForm.css'

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log("name", name);
      }

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log("email", email);
      }
    
      const handleSubjectChange = (event) => {
        setSubject(event.target.value);
        console.log("subject", subject);
      }

      const handleMessageChange = (event) => {
        setMessage(event.target.value);
        console.log("message", message);
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();

        const formSubmission = {
            name: name,
            email:email,
            subject:subject,
            message:message,
        }
      alert("Sucess, thank you for your message!")
      console.log("Form Submitted", formSubmission);

      }
    
    return (
        <section className='contact-form-wrapper'>
        <h2>Send Me a Message.</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className='contact-form-group contact-form-group-name-email'>
                    <div className='contact-form-group-name'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="contact-form-input-name" onChange={handleNameChange} required></input>
                    </div>
                    <div className='contact-form-group-email'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="contact-form-input-email" onChange={handleEmailChange} required></input>
                    </div>
                </div>
                <div className='contact-form-group'>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" className="contact-form-input-subject" onChange={handleSubjectChange} required></input>
                </div>
                <div className='contact-form-group'>
                    <label htmlFor="message">Message:</label>
                    <textarea type="text" id="message" name="message" className="contact-form-input-message" onChange={handleMessageChange} required></textarea>
                </div>
                <button className='contact-form-button' type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm