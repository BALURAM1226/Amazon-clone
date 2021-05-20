import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import { basketTotalAmount } from './reducer';
import {useHistory} from 'react-router-dom';
export default function Subtotal(){

  const history = useHistory();
  const [{basket} , dispatch] = useStateValue();
  return(
     <div className="subtotal">
    <CurrencyFormat
    renderText={(value) =>(
      <>
     <p>
     Subtotal({basket.length} items):
     <strong>{value}</strong>
     </p>
      <small className="subtotal_gift">
      <input type="checkbox" />The order contains a gift
      </small>
      </>

    )}

    decimalScale={2}
    value={basketTotalAmount(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
    
    
     />

    <button onClick={e => history.push('/Payment')}>Proceed to Checkout</button>
    </div>


  );
}
