import Contacts from '../../components/contacts/Contacts'
import './ContactUs.css'

const ContactUs  = () => {
  return (
    <div className='container' id='contacts'>
      <div className='contact-container'>
        <div>
          <h1>Contact Us</h1>
          <p>FOLLOW US ON SOCIAL MEDIA AND DISCOVER MORE</p>
        </div>
        <Contacts showNames={true} className='contacts-icons'/>
      </div>
    </div>
  )
}

export default ContactUs