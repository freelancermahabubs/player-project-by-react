import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Info from '../Info/Info';
import './Players.css';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [info, setInfo] = useState([]);
  useEffect(()=>{
    const loadPlayersData = async() =>{
      try{
        const jsonData = ('player.json')
        const res = await fetch(jsonData)
        const data = await res.json()
       setPlayers(data);
      }catch(error){
        console.log(error)
      }
    };
    loadPlayersData();
  },[]);

  useEffect(()=> {
    // step 1: get id 
  const storedCart = getShoppingCart();
  let savedCart = []
  for(const id in storedCart){
    // step 2: get the product by using id 
    const addedProduct = players.find(player => player.id === id);
    if(addedProduct){
       // step 3: get quantity of the products
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;
    savedCart.push(addedProduct);
    }
  };
  setInfo(savedCart)
  },[players]);

  const handleAddToCart = (player) =>{
    let newInfo = [];
    const exist = info.find(pl => pl.id === player.id);
    if(!exist){
      player.quantity = 1;
      newInfo = [...info, player]
    }

    else{
      exist.quantity = exist.quantity + 1;
      const remaining = info.filter(pd => pd.id !== player.id);
      newInfo = [...remaining, exist]
    }
    setInfo(newInfo);
   addToDb(player.id);

  }
  return (
    <div className='player-container'>
      <div className='grid px-2 gap-5 lg:pl-5 my-6 lg:grid-cols-3'>
        {
          players.map(player => <Cart
             key = {player.id}
              player = {player}
              handleAddToCart = {handleAddToCart}
              
              />)}
      </div>
      <div className='info'>
        <Info info = {info}/>
      </div>
    </div>
  );
};

export default Players;