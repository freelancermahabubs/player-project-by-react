import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
const Cart = (props) => {
  const {name, img, playing_role,  price, ratings} = props.player;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div>
    <div className="card w-full min-h-full shadow-xl">
   <img className='w-[96%] rounded-xl ml-2 mr-2 my-2 transition ease-in delay-150  hover:-translate-y-1 hover:scale-50 hover:cursor-pointer duration-300' src={img} alt="Img" />
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">Name: {name}</h2>
    <p className='text-xl font-semibold'>Playing Role: {playing_role}</p>
    <p className='text-xl font-semibold'>Price: ${price}</p>
    <p className='text-xl font-semibold'>Ratings: {ratings} Stars</p>
  </div>
  <button onClick={()=> handleAddToCart(props.player)} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-xl">Add to Cart <span className='pl-2'><FontAwesomeIcon icon={faShoppingCart} /></span></button>
</div>
    </div>
  );
};

export default Cart;