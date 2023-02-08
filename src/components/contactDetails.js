import '../css/contactDetails.css'
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"

function ContactDetails({contactInfo}) {

    return(
        <div className='contact-details-wrapper'>
            <div className='contact-details-title-wrapper'>
                <h2>Contact Info.</h2>
            </div>
            <div className='contact-details'>
            <p>Feel free to send me an email. I'll get back to you as soon as I can!</p>
                <div className='contact-details-email'>
                    <AiOutlineMail  size={28}/>
                    <span>{contactInfo.email}</span>
                </div>
                <a href={contactInfo.linkedin}>
                    <AiFillLinkedin  size={28}/>
                </a>
                <a href={contactInfo.github}>
                    <AiFillGithub  size={28}/>
                </a>
            </div>
        </div>
    );
}
export default ContactDetails;