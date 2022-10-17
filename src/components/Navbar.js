import React, { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import {faListDots} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () =>
{
const [Show, SetShow] = useState(true)

return (<>
<div className='menu' onClick={()=>SetShow(!Show)}>
  <FontAwesomeIcon  icon={faListDots}/>
</div>
{Show &&
<div className="nav-section">
<NavLink to='/home'>Home</NavLink>
<NavLink to='/gallery'>Gallery</NavLink>
<NavLink to='/about'>About</NavLink>
<NavLink to='/contact'>Contact us</NavLink>
<NavLink to='/news'>News/Blogs</NavLink>
<NavLink to='/courses'>courses</NavLink>
<NavLink to='/result'>Results</NavLink>
</div>
}
  
  </>
  )
}

export default Navbar