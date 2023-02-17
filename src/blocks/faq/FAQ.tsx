import './FAQ.css'

const FAQ = () => {
  return (
    <div id='faq' className='container yellow'>
      <img src='cells-black-top.png' id='cells-top'/>
      <img src='cells-black-bottom.png' id='cells-bottom'/>
      <h1>FAQ</h1>
      <div className='faq-content'>
        <div className='faq-question'>
          <h2>WHAT IS JAVA</h2>
          <p>Java is a high-level multiplatform programming language, developed by Sun Microsystems in 1995. Since then Java got many major updates and now it supports all modern features.</p>
        </div>
        <div className='faq-question'>
          <h2>WHAT TYPE OF APPLICATIONS DOES THIS COURSE FOCUS ON?</h2>
          <p>This course focuses on web services, you will study how to create a backend for a web application.</p>
        </div>
        <div className='faq-question'>
          <h2>WHAT WILL I BE ABLE TO DO AFTER THIS COURSE?</h2>
          <p>After the course you will be able to pass an interview for Junior Java Developer position and apply for a job offer in a vast majority of IT companies.</p>
        </div>
        <div className='faq-question'>
          <h2>WHAT IS JAVA USED FOR</h2>
          <p>Java is a general-purpose language, so you can develop any kind of application using it. Java is mainly used for creating enterprise web applications, and for BigData development.</p>
        </div>
        <div className='faq-question'>
          <h2>HOW LONG DOES IT TAKE TO STUDY JAVA?</h2>
          <p>Expected course length is 10 months.</p>
        </div>
      </div>
    </div>
  )
}

export default FAQ