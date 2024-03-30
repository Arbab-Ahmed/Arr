import image from "../assets/Images/Hayabusa.jpg";
import z9 from "../assets/Images/Z900org.jfif"
import s10 from "../assets/Images/ducati.webp"
import bike4 from "../assets/Images/S100org.jfif"
import R1 from "../assets/Images/R1.jfif"
import "../assets/css/Home.css";
import Carousel from "react-multi-carousel";
import Furniture from "./Furniture";
import Test from './Test';
import About from "./About";
import Blogmain from "./Blogmain";
import Form from "./Form";
import Footer from "./Footer";
function Home() {
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
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} showDots={true}  removeArrowOnDeviceType={["tablet", "mobile","desktop"]} className="firstSlider">
        <div className="div1">
          <div className="right">
            <h1>
              SUZUKI <br /> HAYABUSA.
            </h1>
            <p>
            Suzuki Hayabusa is a super bike available in only 1 variant and 3 <br /> colours. The Suzuki Hayabusa is powered by 1340cc BS6 engine <br /> which develops  a power of 190 bhp and a torque of 142 Nm. <br /> With both front and rear disc brakes, Suzuki Hayabusa comes up <br /> with anti-locking braking system.
            
            </p>
            <button className="btn2"> Contact Us </button>
            <button className="btn3"> About Us </button>
          </div>
          <div className="left">
            <img src={image} alt="" className="img" />
          </div>
        </div>


        <div className="div1">
          <div className="right">
            <h1>
              KAWASAKI <br /> Z900.
            </h1>
            <p>
            Powered by a 948cc inline-four engine, the Kawasaki Z900 has the <br />capacity to produce a peak torque of 98.6Nm at 7,700 rpm <br /> and a maximum power of 125ps at 9,500rom. <br />The engine's refinement level is simply exquisite. The engine has the capacity to offer a nice mid-range with a  noticeable kick right <br /> after 6,000 rpm.
            </p>
            <button className="btn2"> Contact Us </button>
            <button className="btn3"> About Us </button>
          </div>
          <div className="left">
            <img src={z9} alt="" className="img" />
          </div>
        </div>



        <div className="div1">
          <div className="right">
            <h1>
              DUCATI <br /> PANIGALE V4.
            </h1>
            <p>
            The Ducati Panigale V4 is powered by a 955 cc, liquid-cooled, <br /> Superquadro V-twin engine, which produces 155 horsepower <br />and 77 lb-ft of torque. The engine features a counter-rotating <br />crankshaft, which reduces the gyroscopic effect and <br />improves handling.
            </p>
            <button className="btn2"> Contact Us </button>
            <button className="btn3"> About Us </button>
          </div>
          <div className="left">
            <img src={s10} alt="" className="img" />
          </div>
        </div>



        <div className="div1">
          <div className="right">
            <h1>
              BMW <br /> S1000RR.
            </h1>
            <p>
            The BMW S 1000 RR impresses with potent inline-four engine <br /> and  advanced electronics, steering angle sensor, DTC Slide <br />Control  for acceleration, Brake Slide Assist for deceleration, Shift <br /> assistant Pro, 6.5" TFT-Display, M Chassis Kit, M GPS <br />Lap trigger (activation code), Heated grips, Cruise control, Its refined ...
            </p>
            <button className="btn2"> Contact Us </button>
            <button className="btn3"> About Us </button>
          </div>
          <div className="left">
            <img src={bike4} alt="" className="img" />
          </div>
        </div>



        <div className="div1">
          <div className="right">
            <h1>
              YAMAHA  <br /> R1M.
            </h1>
            <p>
            This device boasts a lightweight chassis, powerful motors,<br /> and precise handling, all of which are included in its design.<br /> The Yamaha YZF R1M has great mileage performance as a result of its lightweight structure, which adds to its high fuel efficiency.<br /> This is one of the reasons for its exceptional mileage performance.
            </p>
            <button className="btn2"> Contact Us </button>
            <button className="btn3"> About Us </button>
          </div>
          <div className="left">
            <img src={R1} alt="" className="img" />
          </div>
        </div>
      </Carousel>
      <div style={{margin: '30px'}}>
   <h1><b> OUR BIKES</b> </h1>
      <p>
      -Life is a journey, enjoy the ride on two wheels. <br />
      -A biker's attitude: Live free, ride hard.
      </p>
   </div>           
   <Furniture />
    <About />
    <div>
      <h1><center> LATEST BLOG
</center></h1>
<br />
<br />
<br />
    <div style={{display : 'flex'}}>
     <Blogmain />
      </div>
      <Test />
    </div>
    <Form />
    </>
  );
}
export default Home;
