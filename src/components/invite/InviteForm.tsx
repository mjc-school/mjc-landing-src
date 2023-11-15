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
        <a href='https://discord.gg/GU9RX6kBPb' target='_blank' className={'join-form-button ' + color}>join the course</a>
      </div>
    </div>
  )
}

export default InviteForm