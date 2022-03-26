import React from 'react';
import './OrderSummary.css'

const OrderSummary = (props) => {
    const {mywattch, getRandom} = props;
   
 const randomly = mywattch.map(name => name.name)

    return (
        <div className='order-summary'>
            <h2>Selected Items : {mywattch.length}</h2>
             <div>

             {
                mywattch.map(name =><h4 key={name.id}>{name.name}</h4>)
            }
  
            </div>
            <button onClick = { () =>getRandom(randomly)}>Choose 1 For me</button>
            
        </div>
       
    );
    
};

export default OrderSummary;