import '../assets/css/Navbar.css'
// import Home from './Home';
// import About from './About';
// import Bike from './Bike';
// import Blogmain from './Blogmain';
// import Footer from './Footer';
import Form from './Form';

// import { Routes, Route } from 'react-router-dom'
import { NavLink,  Link } from 'react-router-dom'

function Navbar (){
    return (
        <>
        <header className='head'>
       
            <h1>EDGECUT</h1>

            <nav className="nav">
             {/* <Routes> */}
             <Link to="/" className='home' > Home </Link>
              <Link to="/about" > About </Link>
              <Link to="/furniture" > Bikes </Link>
              <Link to="/blogmain" > Bloges </Link>
              <Link to="/ab" > Contact Us </Link>
              {/* </Routes> */}
              <NavLink to="/form">
              <button className='btn1'> Login </button>
              </NavLink>
              <input type="search" placeholder='Search...' />
            
            
            </nav>
            

        </header>
   
        </>
    )
}
export default Navbar;





