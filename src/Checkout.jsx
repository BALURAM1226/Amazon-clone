import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
import Subtotal from './Subtotal';
export default function Checkout(){

  const [{basket,user} , dispatch] = useStateValue();


  return (
   <div className="checkout"> 
   
   <div className="checkout_left">

   <img className="checkout_ad" src="https://i.ibb.co/5McY3y1/devices-PC-SL1280-FMjpg.jpg" alt ="adbanner" />
    
   <div>
   <h3>Hello, {user?.email} </h3>
   <h2 className="checkout_title">
   Your Shopping Basket  </h2>
   {basket.map(item => (
     <CheckoutProduct 
      
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}
     
     />

   ))}
  
  </div>
  </div>

   <div className="checkout_right">
   <Subtotal />
   
   
   </div>
   </div>

  );
}
