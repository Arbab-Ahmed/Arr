import { useState } from 'react';
import '../assets/css/Form.css'

function Form (){
    
    const [data, setData] = useState({
        names: "",
        phone: "",
        email: "",
        message: ""
})

    const handleInp=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value})
     
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    return(
       <>
       <div style={{display : 'flex'}}>
       <div className='form_det'>
        <h1>CONTACT US</h1>
        <input type="text" name='names' required value={data.names} placeholder='Name' className='text' onChange={handleInp}/>
        <br />
        <br />
        <br />
        <input type="number" name='phone' value={data.phone} placeholder='Phone Number' className='number' onChange={handleInp}/>
        <br />
        <br />
        <br />
        <input type="Email" name='email' value={data.email} placeholder='E-mail' className='email' onChange={handleInp}/>
        <br />
        <br />
        <br />
        <input type="text" name='message' value={data.message} placeholder='Message' className='mes' onChange={handleInp}/>
        <br /><br /><br />
        <button className='end' onClick={handleSubmit}> Submit </button>
       </div>
       <div className='im_div'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.1518260856276!2d75.74678630202484!3d26.94855070628575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30bbe3b8d23%3A0x81b99ea52007f3b2!2sJhotwara%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1711142199329!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </div>
       </div>
       </>
    )
}
export default Form;