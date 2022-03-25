import React from 'react';
import './OrderSummary.css'

const OrderSummary = (props) => {
    const {wattch, getRandom} = props;
    // console.log( Math.random(wattch));
  
    return (
        <div className='order-summary'>
            <h2>Selected Items : {wattch.length}</h2>
             <div>

             {
                wattch.map(name =><h4 key={name.id}>{name.name}</h4>)
            }
  
            </div>
            <button onClick = { () =>getRandom(wattch)}>Choose 1 For me</button>
        </div>
       
    );
};

export default OrderSummary;