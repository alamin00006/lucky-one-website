import React from 'react';
import './Watch.css'
const Watch = (props) => {
    const {getOrder,watch} = props;
   const {id, name, picture, price} = watch;
  
 
    return (
        <div className='watch'>
          <div>
          <img src={picture} alt="" /> 
         <div className='watch-info'>
         <h4>{name}</h4>
          <p>id :{id}</p>
          <p> Price : {price}</p> 
         </div>
          </div>
          <button onClick={()=> getOrder(watch)} className='btn-addToCart'>AdToCart</button>
        </div>
    );
};

export default Watch;