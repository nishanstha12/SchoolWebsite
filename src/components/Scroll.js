import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'

const Scroll = () => {
    const GoTop = () =>{
window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
 return ( <>
  <div className='scroll-top' onClick={GoTop}>
 <FontAwesomeIcon icon={ faArrowAltCircleUp}></FontAwesomeIcon>   
  </div>
</>
  )
}
export default Scroll;