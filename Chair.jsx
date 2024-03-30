import '../assets/css/Chair.css'
import image from '../assets/Images/ducati.webp'
function Chair(){
    return(
        <>
        <div className='aa'>
            <img src={image} style={{height:'380px'}}/>
            <h2>DUDATI PANIGALE V$</h2>
           <div className='bb'>
           <p className='pp'> 52,000,00/-</p>
            <button className='cc'>BUY NOW</button>
           </div>
        </div>
        
        
        </>
    )
}export default Chair;