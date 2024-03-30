import image from '../assets/Images/Capture.PNG'
import '../assets/css/About.css'
import Carousel from "react-multi-carousel";
function About () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
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
    return(
        <>
       <Carousel  responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} showDots={true}  removeArrowOnDeviceType={["tablet", "mobile","desktop"]} className="firstSlider">
       <div className='div_center'>
            <img src={image} className='img_about'/>
            <div>
                <h1>ABOUT US 1st</h1>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti <br /> dolorem eum consequuntur ipsam repellat dolor soluta aliquid <br /> laborum, eius odit consectetur vel quasi in quidem, eveniet ab est <br /> corporis tempore.</p>
                <button className='btn_div'> Read Me </button>
            </div>
        </div>

        <div className='div_center'>
            <img src={image} className='img_about'/>
            <div>
                <h1>ABOUT US 2nd </h1>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti <br /> dolorem eum consequuntur ipsam repellat dolor soluta aliquid <br /> laborum, eius odit consectetur vel quasi in quidem, eveniet ab est <br /> corporis tempore.</p>
                <button className='btn_div'> Read Me </button>
            </div>
        </div>

        <div className='div_center'>
            <img src={image} className='img_about'/>
            <div>
                <h1>ABOUT US 3rd</h1>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti <br /> dolorem eum consequuntur ipsam repellat dolor soluta aliquid <br /> laborum, eius odit consectetur vel quasi in quidem, eveniet ab est <br /> corporis tempore.</p>
                <button className='btn_div'> Read Me </button>
            </div>
        </div>

        <div className='div_center'>
            <img src={image} className='img_about'/>
            <div>
                <h1>ABOUT US 4th</h1>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti <br /> dolorem eum consequuntur ipsam repellat dolor soluta aliquid <br /> laborum, eius odit consectetur vel quasi in quidem, eveniet ab est <br /> corporis tempore.</p>
                <button className='btn_div'> Read Me </button>
            </div>
        </div>
       </Carousel>
        
        </>
    )
}
export default About;