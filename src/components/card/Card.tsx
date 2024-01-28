import { 
  RxGithubLogo,
  RxCode
} from 'react-icons/rx';
import {
  MdEmail
} from 'react-icons/md';
import {
  SiDiscord, SiPatreon
} from 'react-icons/si';
import { IconType } from 'react-icons';
import './Card.css'

interface CardProps {
  href: string,
  title: string,
  description: string,
  icon: string,
  size: number
}

const iconsMap = {
  'RxGithubLogo': RxGithubLogo,
  'RxCode': RxCode,
  'MdEmail': MdEmail,
  'SiDiscord': SiDiscord,
  'SiPatreon': SiPatreon,
}

const Card = ({href, title, description, icon, size}: CardProps) => {
  const IconComponent = (iconsMap as any)[icon]
  return (
    <a href={href} target="_blank" className='card'>
      <IconComponent {...{size}}/>
      <h3>{title}</h3>
      <span>{description}</span>
    </a>
  )
}

export default Card