import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Gallery = () => {
  return (<>
  <div className='common-heading'><h1>Our Gallery</h1> </div>
  <div className='gallery'>
  <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="./images/slide3.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Our secondary block</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img className="d-block w-100" src="./images/img3.jpg" alt="Second slide"/>

        <Carousel.Caption>
          <h3>Staffs</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     <img className="d-block w-100" src="./images/img4.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Forever in the heart of subijimurian</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  </>
  )
}

export default Gallery