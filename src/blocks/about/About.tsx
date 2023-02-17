import InviteForm from '../../components/invite/InviteForm';
import './About.css';

const About = () => {

  return (
    <div id='about' className='container'>
      <div className='about-title'>
        <h1>MJC School</h1>
        <h1>We Learn Java</h1>
      </div>
      <div className='about-subtitle'>
        <h2>Educational environment for Engineers, students, and Java enthusiasts to deliver top-notch discipline standards and create knowledge-sharing culture.</h2>
      </div>
      <div className='about-desc'>
        <span>
          MJC School was created by Engineers for Engineers. We give you the skills to meet the requirements of modern projects and a chance to become a member of a wide family of Java Engineers.
        </span>
        <span>
          Let's grow and innovate together! Learn Java with us and become a Junior Software Engineer.
        </span>
      </div>
      <div className='about-join'>
        <div id='about-join-form'></div>
        <InviteForm color='green'/>
      </div>
    </div>
  )
}

export default About;