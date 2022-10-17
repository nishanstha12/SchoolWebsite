import React from 'react'

const Footer = () => {
  return (<>
  <div className='footer'>
<div className='F-logo'>
<img src='./images/logo.png' alt='Footer logo'/>
</div>
<div className='useful-links'>
<h2>Useful Links</h2>
<a href='https://subijimur.netlify.app/home'>Home</a>
<a href='/gallery'>Gallery</a>
<a href='/about'>About</a>
<a href='/courses'>Courses</a>
<a href='/news'>News/Blogs</a>
<a href='/facilities'>Facilities</a>
</div>
<div className='follow-us'>
    <h2>Follow us on</h2>
    <a href='https://www.facebook.com/subijimur'>Facebook</a>
    <a href='https://www.facebook.com/subijimur'>Instagram</a>
    <a href='https://www.facebook.com/subijimur'>Twitter</a>
</div>

<div className='download'>
  <h2>Download Our App</h2>
<img src='./images/app-store.png' alt='app-store'/>
<img src='./images/play-store.png' alt='play-store'/>
</div>
  </div>
  <div className='copyright'>
    <p>
    </p>
  </div>
  </>
  )
}
export default Footer