import React, { useEffect, useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';

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
        <div className='full-display'>
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
               <h1>number:{random} selected</h1>
              
                </div>
              
        </div>
    );
};

export default Watchs;