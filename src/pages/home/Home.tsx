import About from '../../blocks/about/About';
import Announcement from '../../blocks/announcement/Announcement';
import Benefits from '../../blocks/benefits/Benefits';
import Agenda from '../../blocks/agenda/Agenda';
import Java from '../../blocks/java/Java';
import FAQ from '../../blocks/faq/FAQ';
import ContactUs from '../../blocks/contact-us/ContactUs';
import Footer from '../../components/footer/Footer';
import Partners from '../../blocks/partners/Partners';
import './Home.css'

const Home = () => 
  <div className='blocks-container'>
    <About/>
    <Announcement/>
    <Benefits/>
    <Agenda/>
    <Java/>
    <FAQ/>
    <Partners/>
    <ContactUs/>
    <Footer/>
  </div>

export default Home