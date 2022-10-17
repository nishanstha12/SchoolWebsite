import React from 'react'
import Navbar from '../components/Navbar'
import Motto from '../components/Motto'
import Topnav from '../components/Topnav'
import Scroll from '../components/Scroll'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import About from '../components/About'
import News from '../components/News'
import Courses from '../components/Courses'
import Footer from '../components/Footer'

const Homepage = () => {
  return (<>
    <Topnav/>
  <Navbar/>
  <Motto/>
<div className='Home-bg'>
{/* BACKGROUND IMAGE FOR HEROPAGE */}
</div>
<Courses/>
<About/>
<Gallery/>
<News/>
<Contact/>

<Footer/>
<Scroll/>
  </>
  )
}

export default Homepage