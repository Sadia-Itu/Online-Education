import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    const totalprice=cart.reduce((total,prd)=>total+prd.price,0)
   


    return (
        <div>
            <h4>Order Summary</h4>
    <p>Items Ordered:{cart.length}</p>
    
    
    <p>Total Price:${totalprice}</p>
            
        </div>
    );
};

export default Cart;