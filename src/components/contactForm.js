

import '../css/contactForm.css'

function ContactForm() {

    return (
        <div className='contact-form-wrapper'>
        <h2>Send Me a Message.</h2>
            <form className="contact-form">
                <div className='contact-form-group contact-form-group-name-email'>
                    <div className='contact-form-group-name'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="contact-form-input-name"></input>
                    </div>
                    <div className='contact-form-group-email'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="contact-form-input-email"></input>
                    </div>
                </div>
                <div className='contact-form-group'>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" className="contact-form-input-subject"></input>
                </div>
                <div className='contact-form-group'>
                    <label htmlFor="message">Message:</label>
                    <textarea type="text" id="message" name="message" className="contact-form-input-message"></textarea>
                </div>
                <button className='contact-form-button' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm