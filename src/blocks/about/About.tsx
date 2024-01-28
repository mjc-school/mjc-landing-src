import './About.css';

const About = () => {

  return (
    <div id='about' className='container'>
      <div className='container-content about-desc'>
        <img src='img/title_bak.png' className='header-image colspan-2 justify-self-center'/>
        <span>
          MJC School is free-of-charge and community-based Java school for everyone regardless of age, occupance or residence.
        </span>
        <span>
          MJC School is an educational environment for engineers, students, and Java enthusiasts to deliver top-notch discipline standards and create knowledge-sharing culture.
        </span>
        <span>
          MJC School was created by engineers for anyone. We give you the skills to meet the requirements of modern projects and a chance to become a member of a wide family of Java Engineers. 
        </span>
        <span>
          Let's grow and innovate together! Learn Java with us and become a Junior Software Engineer.
        </span>
        <a href='https://discord.gg/GU9RX6kBPb' target='_blank' className='button colspan-2 justify-self-center'>Join</a>
      </div>
    </div>
  )
}

export default About;