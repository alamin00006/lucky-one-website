import React, { useEffect, useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Random from '../Random/Random';

import Watch from '../Watch/Watch';
import './Watchs.css'
const Watchs = () => {
    const [watchs, setWatchs] = useState([]);
    const [wattch, setWatch] = useState([])
    const [random, setRandom] = useState([]);
    
   
        
    const getRandom = (wattch) =>{
     const random = (Math.floor(Math.random()*wattch.length));
     setRandom(random);
   
    }

    const getOrder = (watch) =>{
        const newWatch = [...wattch, watch];
        setWatch(newWatch);
    }
    useEffect(() =>{
        fetch('watch.json')
        .then(res =>res.json())
        .then(data =>setWatchs(data))
    }, [])

  
    return (
        <div className='full-project'>
            <h1 className='title'>My Watches Shopping Store</h1>
            <div className='full-display container'>
            
            <div className='watches'>
            
                 {
                        watchs.map(watch =><Watch 
                            watch = {watch} key = {watch.id}
                            getOrder ={getOrder}
                             ></Watch>)
                   }
               
            </div>
           
            <div className='order-summary'>

               <OrderSummary  getRandom ={getRandom} wattch = {wattch}></OrderSummary>
               <Random random = {random}></Random>
             
                </div>
              
        </div>
        </div>
    );
};

export default Watchs;