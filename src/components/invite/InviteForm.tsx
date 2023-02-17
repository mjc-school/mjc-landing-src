import {
  BaseSyntheticEvent, 
  useState
} from 'react';
import { RxCheckCircled } from 'react-icons/rx';
import './InviteForm.css'

interface InviteFormProps {
  color: "green" | "purple";
}

const InviteForm = ({color} : InviteFormProps) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
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
        setSuccess(false)
      })
  }

  return (
    <div className='join-form'>
      <div className='join-form-controls'>
        <input type='text' className={'join-form-input ' + color + (error ? ' error': '')} value={email} onChange={e => handleEmailInput(e)} placeholder='john.jackson@foo.bar'></input>
        <button type='submit' className={'join-form-button ' + color} onClick={handleSubmit}>join the course</button>
      </div>
      <div>*Your security is important to us. We do not store your email. By clicking the button you agree to pass your email to Slack to receive an invitation email.</div>
      <div className={'success-message ' + (success ? '' : 'hidden')}>
        An invitation has been sent. Please check your email and join slack <RxCheckCircled size={20}/>
      </div>
    </div>
  )
}

export default InviteForm