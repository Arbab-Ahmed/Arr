import '../assets/css/Footer.css'
import image4 from '../assets/Images/image3.jpg'
import image3 from '../assets/Images/wood.jfif'
import image5 from '../assets/Images/new.jfif'
import image from '../assets/Images/movingchair.webp'
function Footer (){
    return(
        <>
        <footer>
            <div className='blk'>
             <div className='bl_div'>
             <a href="" className='bl'>Call☎:- +91-8923798525</a>
               <a href="" className='bl_2'>Email📧:- arbabahmed354@gmail.com</a>
               <a href="" className='bl_3'>📍Location</a>
             </div>
             <div className='main4'>
                <div>
                    <h2 className='insta_hd'>QUICK LINKS</h2>
                    <div className='fl'>
                        <div>
                        <a href="" className='bl'>Home</a>
                        <br /><br />
                        <a href="" className='bl'>Furnitures</a>
                        <br /><br />
                        <a href="" className='bl'>Contact Us</a>
                        </div>
                        <div>
                        <a href="" className='bl'>About</a>
                        <br /><br />
                        <a href="" className='bl'>Blogs</a>
                        </div>
                    </div>
                </div>
                <div className='main3'>
                  <div>
                  <h2 className='insta'>INSTAGRAM FEEDS</h2>
                    <img src={image} className='image_div'/>
                    <img src={image3} className='image_div'/>
                    <br />
                    <img src={image4} className='image_div'/>
                    <img src={image5} className='image_div'/>
                  </div>
                </div>
                <div className='bl'>
                    <h2 className='insta_sig'>SIGNUP TO YOUR 
                    <br />NEWSLETTER</h2>
                    <input type="email" className='email_sig' placeholder='Enter YourEmail'/>
                    <br /><br /><br />
                    <button className='btn_sub'> Subscribe </button>
                    <br /><br />
                    <button className='btn_sm_1'><b>F</b></button>
                    <button className='btn_sm'><b>🐤</b></button>
                    <button className='btn_sm'><b>in</b></button>
                    <button className='btn_sm'>📷</button>
                </div>
             </div>
            </div>
        </footer>
               <p><center>© 2024 All Rights Reserved. By HTML Design</center></p>
        </>
    )
}
export default Footer;