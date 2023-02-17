import { 
  RxLinkedinLogo, 
  RxGithubLogo,
  RxCode
} from 'react-icons/rx';
import {
  MdEmail
} from 'react-icons/md';
import {
  SiSlack
} from 'react-icons/si';
import Contacts from '../../components/contacts/Contacts';
import './Benefits.css';

const Benefits = () => {
  return (
    <div id='benefits' className='container'>
      <h1>MJC School: Benefits</h1>
      <div className='benefits-card-container'>
        <div className='card green'>
          <h1>ONLINE EDUCATION</h1>
          <span>Education is online, available from any location!</span>
        </div>
        <div className='card yellow colspan-2'>
          <h1>EXPERIENCED MENTORS</h1>
          <span>Course is created and maintained by real professionals who work with Java on a daily basis.</span>
        </div>
        <div className='card yellow'>
          <h1>FREE FOR EVERYONE</h1>
          <span>Education is free of charge. Everyone can join, all you need are basic programming skills.</span>
        </div>
        <div className='card green'>
          <h1>PRODUCTION MENTORING</h1>
          <span>During the Stage 4 you'll get into individual mentoring where production engineers will help you to cover with advanced education program!</span>
        </div>
        <div className='card yellow'>
          <h1>PROFESSIONAL OPPORTUNITIES</h1>
          <span>The course gives sufficient knowledge to join a company as a Junior Software Developer.</span>
        </div>
        <div className='card green horizontal colspan-3'>
          <h1>COMMUNITY SUPPORT</h1>
          <span>Community - is not only about school! Subscribe to our channels, join chats and stay informed about all the upcoming events!</span>
          <Contacts showNames={false} className='contacts-icons'/>
        </div>
      </div>
    </div>
  )
}

export default Benefits