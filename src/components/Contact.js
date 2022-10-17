import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMessage}  from '@fortawesome/free-regular-svg-icons'
import {faLocationArrow,faPhone} from '@fortawesome/free-solid-svg-icons'
import Scroll from '../components/Scroll'
const Contact= () => {
  return (<>
  <div className='common-heading'>
   <h1 >Get In Touch</h1>
   </div>
<div className='contact-us'>

<div className='contact-detail'>
<p> <span><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon></span>
 Biratchowk,Morang</p>
<p> <span><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> </span>021-545473,021-539715,9852041563 </p>
<p> <span><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> </span>subijimur051@gmail.com</p>
<div className='iframe1'>
<iframe title='location1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.48462271966!2d87.37845761451527!3d26.664978977131202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6f5873c8e4e9%3A0x97dd61fdcceef993!2sSubijimur%20Memorial%20Secondary%20School!5e0!3m2!1sen!2snp!4v1660038531738!5m2!1sen!2snp" 
width="450"
 height="350"
  style={{border:0}}
 allowFullScreen="" loading="lazy" 
referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</div>


    <div className='contact-form'>
        <h1>Contact-us</h1>
<input typeof='text' placeholder='Full name'/>
<input typeof='address' placeholder='Address'/>
<input typeof='email' placeholder='E-mail Address'/>
<input typeof='number' placeholder='contact number'/>
<textarea rows="4" cols="40"  placeholder='Mesaage..' />
<button>Sent</button>

</div>
</div>
  <iframe title='location2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.6142092280134!2d87.38018641451515!3d26.660831977307346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef65f60bef9e31%3A0xd431c4c921ae3cf3!2sSubijimur%20Memorial%20H.%20S.%20School!5e0!3m2!1sen!2snp!4v1660027319400!5m2!1sen!2snp"
   width="100%" 
   height="320"
    style={{border:0,}}
     allowFullFcreen=""
    loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
<Scroll/>
  </>
  )
}

export default Contact;