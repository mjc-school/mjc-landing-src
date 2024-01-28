import About from '../../blocks/about/About';
import Benefits from '../../blocks/benefits/Benefits';
import Agenda from '../../blocks/agenda/Agenda';
import Java from '../../blocks/java/Java';
import SupportUs from '../../blocks/support-us/SupportUs';
import './Home.css'

const Home = () => 
  <div className='blocks-container'>
    <About/>
    <Benefits/>
    <Agenda/>
    <Java/>
    <SupportUs/> 
  </div>

export default Home