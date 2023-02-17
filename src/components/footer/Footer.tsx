import './Footer.css'

const Footer = () => {
  return (
    <div id='footer' className='footer-container'>
      <div className='vendor'>
        <h1>Powered By</h1>
        <img src='EPAM_LOGO_Primary.png' id='epam-logo'/>
      </div>
      <div className='copyright'>
        &copy; Copyright 2023, MJC School
      </div>
    </div>
  )
}

export default Footer;