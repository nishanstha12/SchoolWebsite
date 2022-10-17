import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLock} from '@fortawesome/free-solid-svg-icons'
const Topnav = () => {
  return (<>
  <div className='topnav'>
  <div className='logo'>

<img src='./images/logo.png' alt='Logo'/>
</div>
<div className='R-topnav'>
<div className='topnav-details'>
<p>Biratchowk,Morang</p>
<p>subijimur051@gmail.com</p>
<p> 021-545473</p>
<p>021-539715</p>
<p>9852041563</p>
</div>

<div className='social-media'>
  <div className='facebook'>
<a href='https://www.facebook.com/subijimur'>
    <FontAwesomeIcon icon={faFacebook}/></a>
    </div>
    <div className='login'>
<FontAwesomeIcon icon={faLock}/>
<Dropdown>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        Login
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="https://edigitalnepal.com/sms/login?role=admin">Admin</Dropdown.Item>
        <Dropdown.Item href="https://edigitalnepal.com/sms/login?role=teacher">Teacher</Dropdown.Item>
        <Dropdown.Item href="https://edigitalnepal.com/sms/login?role=student">students/parents</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
</div>
  </div>
  </div>
  
  
  
  </>
  )
}

export default Topnav