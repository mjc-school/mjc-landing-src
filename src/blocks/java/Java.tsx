import React from 'react';
import './Java.css';

interface Reason {
  id: number,
  reason: string,
  description: string
}

const Java = () => {
  const [reasons, setReasons] = React.useState<Reason[]>([])

  React.useEffect(() => {
    fetch('json/reasons.json')
      .then(response=> response.json())
      .then(data => {
        setReasons(data)
      })
  }, [])

  return (
    <div id='java' className='container alt-3'>
      <div className='container-title'>
        <h1>Why Choose Java?</h1>
      </div>
      <div className='container-content java-content'>
        {reasons.map(r => (
          <div id={''+r.id}>
            <h3 className='reason-title'>{r.reason}</h3>
            <p dangerouslySetInnerHTML={{__html: r.description}}></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Java