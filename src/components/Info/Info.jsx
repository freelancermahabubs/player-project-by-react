import React from 'react';
const Info = ({info}) => {

let totalPrice = 0;
let totalShipping = 0;
let quantity = 0;
  for(const player of info){
    totalPrice = totalPrice + player.price * player.quantity;
    totalShipping = totalShipping + player.shipping;
    quantity = quantity + player.quantity;
    
  }
 const tax = (totalPrice * 7 / 100);
 const grandTotal = (totalPrice + totalPrice + tax);

  return (

       <div className='my-6 rounded-lg md:ml-3 lg:ml-3 bg-slate-700 text-white'>
        <div className='text-center  bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% rounded'>
        <h1 className='text-3xl font-semibold p-3'>Order Summery</h1>
        </div>
     
      <div className='my-8'>
        <p className='text-2xl font-semibold pl-5 mb-2'>Selected Number: <span className='text-orange-600'>{quantity}</span></p>
        <p className='text-2xl font-semibold pl-5 mb-2'>TotalPrice: <span className='text-orange-600'>${totalPrice}</span></p>
        <p className='text-2xl font-semibold pl-5 mb-2'>Tax: <span className='text-orange-600'>${tax.toFixed(2)}</span></p>
        <h4 className='pl-2 my-3 pb-5 text-2xl font-semibold text-center'>Grand Total: <span className='text-orange-600'>${grandTotal.toFixed(2)}</span></h4>
      </div>
    
    </div>
  )
 


};

export default Info;