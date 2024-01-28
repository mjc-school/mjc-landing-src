import Card from '../../components/card/Card';
import React from 'react';
import './SupportUs.css'

interface CardData {
  href: string,
  title: string,
  description: string,
  icon: string
}

const SupportUs  = () => {
  const [cards, setCards] = React.useState<CardData[]>([]);

  React.useEffect(() => {
    fetch('json/support.json')
      .then(response=> response.json())
      .then(data => {
        setCards(data)
      })
  }, [])

  return (
    <div className='container' id='contacts'>
      <div className='container-title'>
        <h1>Support Us</h1>
      </div>
      <div className='container-content container-cards'>
        {cards.map(card => (
          <Card href={card.href} title={card.title} description={card.description} icon={card.icon} size={72}/>
        ))}        
      </div>
    </div>
  )
}

export default SupportUs