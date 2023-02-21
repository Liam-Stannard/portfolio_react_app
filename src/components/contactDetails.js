import '../css/contactDetails.css'
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"

function ContactDetails({contactInfo}) {

    return(
        <section className='contact-details-wrapper'>
            <div className='contact-details-title-wrapper'>
                <h2>Contact Info.</h2>
            </div>
            <div className='contact-details'>
            <p>Feel free to send me an email or check out my other pages. I'll get back to you as soon as I can!</p>
                <div className='contact-details-links-wrapper'>
                <a className='contact-details-link' target='_blank' rel="noreferrer" href={'mailto:'+contactInfo.email}>
                    <AiOutlineMail  size={42} className='contact-details-icon'/>
                </a>
                <a href={contactInfo.linkedin} target='_blank' rel="noreferrer" className='contact-details-link'>
                    <AiFillLinkedin  size={42} className='contact-details-icon'/>
                </a>
                <a href={contactInfo.github} target='_blank' rel="noreferrer" className='contact-details-link'>
                    <AiFillGithub  size={42} className='contact-details-icon'/>
                </a>
                </div>
            </div>
        </section>
    );
}
export default ContactDetails;