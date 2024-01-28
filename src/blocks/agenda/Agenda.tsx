import {
  useEffect, 
  useState,
  BaseSyntheticEvent
} from 'react';
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext, 
  Dot 
} from 'pure-react-carousel';
import {
  RxArrowRight,
  RxArrowLeft,
  RxCheckCircled
} from 'react-icons/rx';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Agenda.css';

interface Stage {
  id: string;
  title: string;
  description: string;
  duration: string;
  format: string;
  program: string;
  result: string;
}

const Agenda = () => {
  const [stages, setStages] = useState<Stage[]>([])

  useEffect(() => {
    fetch('json/stages.json')
      .then(response=> response.json())
      .then(data => {
        setStages(data)
      })
  }, [])

  return (
    <div id='agenda' className='container alt-2'>
      <div className='container-title'>
        <h1>Course Agenda</h1>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={stages.length}
        isIntrinsicHeight={true}
        className='container-content agenda-carousel'
      >
        <div className='agenda-stages'>
          {stages.map((stage, index) => (
            <Dot slide={index} children={stage.id} className='agenda-stages-button'/>
          ))}
        </div>

        <Slider>
          {stages.map((stage, index) => (
            <Slide index={index}>
              <div className='agenda-stage'>
                <div className='agenda-stage-title'>
                  <h2>{stage.id}</h2>
                  <h2><b>{stage.title}</b></h2>
                </div>
                <div className='agenda-stage-content'>
                  <p dangerouslySetInnerHTML={{__html: stage.description}}></p>
                  <div className='agenda-stage-features'>
                    <h3>Duration:</h3>
                    <h4>{stage.duration}</h4>
                    
                    <h3>Format:</h3>
                    <h4>{stage.format}</h4>
                    
                    <h3>Program:</h3>
                    <h4>{stage.program}</h4>
                    
                    <h3>Result:</h3>
                    <h4>{stage.result}</h4>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>

        <div className='agenda-stage-control'>
          <ButtonBack className='agenda-stages-dots-button'>
            <RxArrowLeft size='48'/>
          </ButtonBack>
          <div className='agenda-stages-dots'>
            {stages.map((stage, index) => (
              <Dot slide={index} className='agenda-stages-dot'/>
            ))}
          </div>
          <ButtonNext className='agenda-stages-dots-button'>
            <RxArrowRight size='48'/>
          </ButtonNext>
        </div>
        <div className='agenda-join'>
          <a href='https://discord.gg/GU9RX6kBPb' target='_blank' className='button'>Join</a>
        </div>
      </CarouselProvider>
    </div>
  )
}

export default Agenda