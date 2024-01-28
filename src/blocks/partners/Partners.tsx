import './Partners.css'

const Partners = () => {
  return (
    <div id='partners' className='container'>
      <div className='container-title'>
        <h1>Partners</h1>
      </div>
      <div className='container-content partners-content'>
        <div className='partner'>
          <a href='https://wearecommunity.io/communities/mjc' target='_blank'>
            <img src='EPAM_LOGO_Primary.png'/>
            EPAM
          </a>
        </div>
        <div className='partner'>
          <a href='https://wearecommunity.io/communities/mjc' target='_blank'>
            <img src='mjc.png'/>
            MJC
          </a>
        </div>
        <div className='partner'>
          <a href='https://wearecommunity.io/communities/jarge' target='_blank'>
            <img src='jarge.png'/>
            JAR.GE
          </a>
        </div>
        <div className='partner'>
          <a href='https://wearecommunity.io/communities/ljc' target='_blank'>
            <img src='ljc.png'/>
            LJC
          </a>
        </div>
        <div className='partner'>
          <a href='https://wearecommunity.io/communities/java_turkiye' target='_blank'>
            <img src='jturkiye.png'/>
            Java Community Turkiye
          </a>
        </div>
      </div>
    </div>
  )
}

export default Partners