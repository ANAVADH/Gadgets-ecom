import React from 'react'
import { useCart } from "react-use-cart";
import './hotsale.css'
import data from './data'


function SingleCard(Pno) {
  const { addItem } = useCart();
 
 
 
  return (
    <div>
          <div className='Rrow row'>
          
            
       
       {data.map((item)=>(
        <div  className="main-c card col">
       <img className=" card-img-top" src={item.image} alt="an"/>
       <div className="card-body">
         <p className="card-text">{item.name}</p>
         <div>
         <h6 className='text-primary'>${item.price}</h6>
         
         <p  className='text-danger'>only-({item.quantity})left</p>
        
         </div>
         <div className='last'>
         <p style={{ fontSize: '10px', color: 'gray' }}><s>$1223</s></p>
           <p style={{ fontSize: '10px', color: 'gray' }}>4.5 <i className='text-primary' class="fa-solid fa-star"></i></p>
         </div>
         <div key={item.id} className='adc'>
         <button onClick={() => addItem(item)}  type="button" class="btn btn-outline-primary btn-lg">Add to cart</button>

         </div>
       </div>
     </div>

       ))}   

     
     </div> 
      
    </div>
  )
}

export default SingleCard
