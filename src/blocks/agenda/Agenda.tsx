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
import InviteForm from '../../components/invite/InviteForm';

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
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const [stages, setStages] = useState<Stage[]>([])
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleEmailInput = (event: BaseSyntheticEvent) => {
    setEmail(event.target.value)
    setError(!emailRegex.test(event.target.value) && event.target.value)
    setSuccess(false)
  }

  const handleSubmit = () => {
    if (!emailRegex.test(email)) {
      setError(true)
      setSuccess(false)
      return
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: email})
    }
    fetch('/api/slack/invite', requestOptions)
      .then(response => response.json())
      .then(() => setSuccess(true))
      .catch(() => {
        setError(true)
        setSuccess(true)
      })
  }

  useEffect(() => {
    fetch('stages.json')
      .then(response=> response.json())
      .then(data => {
        setStages(data)
      })
  }, [])

  return (
    <div id='agenda' className='container'>
      <h1>Course Agenda</h1>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={stages.length}
        isIntrinsicHeight={true}
        className='agenda-carousel'
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
                  <h1>{stage.title}</h1>
                </div>
                <div className='agenda-stage-content'>
                  <p>{stage.description}</p>
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
      </CarouselProvider>
      <div className='agenda-join-form-container'>
        <InviteForm color='purple'/>
      </div>
    </div>
  )
}

export default Agenda