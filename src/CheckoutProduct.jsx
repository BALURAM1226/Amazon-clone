import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';
export default function CheckoutProduct({id,price,image,rating,title})  {

  const [{basket},dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id:id
    })

  }

  return(
    <div className ="CheckoutProduct">
    <img className="checkoutproduct_img" src ={image} alt="ProductImage"/>

    <div className="checkoutproduct_info">
    <p className="checkoutproduct_title">{title}</p>
    <p className="checkoutproduct_price">
      <small >$</small>
      <strong>{price}</strong>
    </p>
     <div className="checkoutproduct_rating">
     {
         Array(rating)
         .fill()
         .map((_, i)=>(
           <p>⭐️</p>
          
         )) }
      </div>
      <button onClick={RemoveFromBasket}>Remove from bascket</button>

    </div>
    
    </div>

  )
}
