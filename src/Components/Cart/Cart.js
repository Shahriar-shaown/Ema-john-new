import React from 'react';
import'./Cart.css';

const Cart = ({cart}) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        //console.log(product.price)
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    //console.log(typeof tax)
    const grandTotal = total +  shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary :</h3>
            <p>Selected items : {quantity}</p>
            <p>Total price : ${total}</p>
            <p>Total shipping charge : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : ${grandTotal}</h3>
        </div>
    );
};

export default Cart;