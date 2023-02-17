import { 
  RxLinkedinLogo, 
  RxGithubLogo,
  RxCode
} from 'react-icons/rx';
import {
  MdEmail
} from 'react-icons/md';
import {
  SiSlack
} from 'react-icons/si';
import './Contacts.css'

interface ContactsProps {
  showNames: boolean;
  className?: string;
}

const Contacts = ({showNames, className} : ContactsProps) => {
  return (
    <div className={'contacts-container ' + className}>
      <a href="https://www.linkedin.com/groups/12668113/" target="_blank">
        <RxLinkedinLogo size='48'/>
        {showNames && <p>LinkedIn</p>}
      </a>
      <a href="https://github.com/mjc-school/MJC-School" target="_blank">
        <RxGithubLogo size='48'/>
        {showNames && <p>GitHub</p>}
      </a>
      <a href="mailto:OrgMJCSchool@epam.com" target="_blank">
        <MdEmail size='48'/>
        {showNames && <p>e-Mail</p>}
      </a>
      <a href="#about-join-form">
        <SiSlack size='48'/>
        {showNames && <p>Slack</p>}
      </a>
      <a href="https://autocode-next.lab.epam.com/courses/189" target="_blank">
        <RxCode size='48'/>
        {showNames && <p>AutoCode</p>}
      </a>
    </div>
  )
}

export default Contacts