import React from 'react';
import './Benefits.css';

interface Benefit {
  id: string;
  title: string;
  description: string;
  styles: string;
}

const Benefits = () => {
  const [benefits, setBenefits] = React.useState<Benefit[]>([])

  React.useEffect(() => {
    fetch('json/benefits.json')
      .then(response=> response.json())
      .then(data => {
        setBenefits(data)
      })
  }, [])

  return (
    <div id='benefits' className='container alt'>
      <div className='container-title'>
        <h1>
          Principles & Benefits
        </h1>
      </div>
      <div className='container-content benefits-card-container'>
        {benefits.map((benefit, index) => (
          <div className={'card ' + benefit.styles} id={benefit.id}>
            <h3>{benefit.title}</h3>
            <span dangerouslySetInnerHTML={{ __html:benefit.description}}></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits