import Navbar from "./component/Navbar";
import Home from '../src/component/Home'
// import Chair from "./component/Chair";
import Form from './component/Form'
import Footer from "./component/Footer";
// import Bed from "./component/Bed";
// import Wood from "./component/Wood";
// import Table from './component/Table'
// import Fish from './component/Fish'
import About from "./component/About";
// import Blog1 from "./component/Blog1";
// import Blog2 from './component/Blog2'
// import Blog3 from "./component/Blog3";
import Test from './component/Test'
import Blogmain from "./component/Blogmain";
import Furniture from "./component/Furniture";
import { Route , Routes  } from "react-router-dom";
// import Bikes from "./component/Bike";
import "react-multi-carousel/lib/styles.css";


// import Cart from "./component/Cart";
// import Form from '../src/component/Form'
function App (){
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/furniture" element={<Furniture />}/>
      <Route path="/blogmain" element={<Blogmain />}/>
      <Route path="/footer" element={<Footer />}/>
      <Route path="/form" element={<Form />}/>
    </Routes>
    <Footer />
    </>
  );
}
export default App;