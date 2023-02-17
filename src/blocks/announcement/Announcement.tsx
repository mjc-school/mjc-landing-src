import React from 'react';
import './Announcement.css';

const Announcement = () => {
  return (
    <div id='announcement' className='container blue'>
      <div className='announcement-container'>
        <div className='announcement-left'>
          <img src='cells-left-upper.png' id='announcement-left-cells'/>
          <img src='logo.png' id='logo'/>
        </div>
        <div className='announcement-content'>
          <div className='h1'>MJC SCHOOL OPEN DAY</div>
          <h2>FIND OUT HOW TO BUILD YOUR JAVA CAREER</h2>
          <iframe id="open-day-recording" src="https://www.youtube.com/embed/qMR2eKBzakE" title="YouTube video player" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className='announcement-right'>
          <img src='EPAM_LOGO_White.png' id='epam-logo'/>
          <img src='cells-bottom.png' id='announcement-right-cells'/>
        </div>
      </div>
    </div>
  )
}

export default Announcement
