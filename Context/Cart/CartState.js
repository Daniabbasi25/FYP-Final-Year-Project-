import React from 'react';
import CartContext from './CartContext';
const CartState = (props) => {
  // const [total, settotal] = React.useState(0);
let total=200;
  const update=(val)=>{
   total=val
  }
   
    return (
      <CartContext.Provider
        value={{ total, update}}>
        {props.children}
      </CartContext.Provider>
    );
  };
  export default CartState;
  