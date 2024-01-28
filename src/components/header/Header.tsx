import {useState} from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'
import './Header.css';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleHamburgerClick = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='header'>
      <div className='header-icon' onClick={handleHamburgerClick}>
        <RxHamburgerMenu size={40}/>
      </div>
      <div className='header-logo'>
        <img src='img/logo-header.png'/>
      </div>
      <div className={'header-content ' + (collapsed ? 'collapsed' : '')}>
        <ul className='header-links'>
          <li><a href="#about" onClick={() => setCollapsed(true)}>About The School</a></li>
          <li><a href="#agenda" onClick={() => setCollapsed(true)}>Course Agenda</a></li>
          <li><a href="#java" onClick={() => setCollapsed(true)}>About Java</a></li>
          <li><a href="#faq" onClick={() => setCollapsed(true)}>FAQ</a></li>
          <li><a href="#contacts" onClick={() => setCollapsed(true)}>Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header