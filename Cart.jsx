import { useEffect, useState } from 'react';
import axios from 'axios'
import '../assets/css/Cart.css'
function Cart (){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const res = axios.get("https://fakestoreapi.com/products").then((data) =>{
            console.log(data)
            setProducts(data.data)
        }).catch((error) =>{
            console.log("error")
        })
    }, [])
    // console.log(products)
    return(
        <>
       { products.map((e , i)=>{
        return(
            <div className='main'>
            <div >
            <img src={e.image} alt="" />
            
              <h1 className='title'>{e.title}</h1>
              <p className='des'>{e.description}</p>
            </div>
              <div className='pr'>
                  <h4>{e.price}</h4>
                  <h4>{e.rating.rate}</h4>
              </div>
          </div>
       )
        
       })
}

        </>
    )
}
export default Cart;