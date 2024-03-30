import React from 'react'
import '../assets/css/Test.css'
import image9 from '../assets/Images/IMG_20230629_173556_169.jpg'
import Carousel from "react-multi-carousel";
function Test() {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
    <Carousel  responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} showDots={true}  removeArrowOnDeviceType={["tablet", "mobile","desktop"]} className="firstSlider">
    <div>
    <h1 className='he'><center>TESTIMONIAL</center></h1>
      <div className='reviw' style={{ width: '900px'}}>
        <img src={image9} className='cir'/>
        <div className='det'>
            <h1>Arbab Ahmed</h1>
            <p className='perrr'>It is a long established fact that a reader will be distracted by the readable <br /> cIt is a long established fact that a reader will be distracted by the <br />readable c</p>
        </div>
       
      </div>
    </div>
       
       <div>
       <h1 className='he'><center>TESTIMONIAL</center></h1>
      <div className='reviw' style={{ width: '900px'}}>
        <img src={image9} className='cir'/>
        <div className='det'>
            <h1>Owais Ahmed</h1>
            <p className='perrr'>It is a long established fact that a reader will be distracted by the readable <br /> cIt is a long established fact that a reader will be distracted by the <br />readable c</p>
        </div>
       
      </div>
       </div>


        <div>
        <h1 className='he'><center>TESTIMONIAL</center></h1>
      <div className='reviw' style={{ width: '900px'}}>
        <img src={image9} className='cir'/>
        <div className='det'>
            <h1>Aman Singh</h1>
            <p className='perrr'>It is a long established fact that a reader will be distracted by the readable <br /> cIt is a long established fact that a reader will be distracted by the <br />readable c</p>
        </div>
       
      </div>
        </div>
    </Carousel>
    </>
  )
}

export default Test
