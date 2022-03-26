import React, { useEffect, useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Random from '../Random/Random';

import Watch from '../Watch/Watch';
import './Watchs.css'
const Watchs = () => {
    const [watchs, setWatchs] = useState([]);
    const [mywattch, setWatch] = useState([])
    const [random, setRandom] = useState([]);

    const getRandom = (names) =>{
  
     const random = Object.values(names)[Math.floor(Math.random()*Object.values(names).length)]
     setRandom(random);
   
    }

    const getOrder = (watch) =>{
        const newWatch = [...mywattch, watch];
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

               <OrderSummary  getRandom ={getRandom} mywattch = {mywattch}></OrderSummary>
               <Random random = {random}></Random>
             
                </div>
              
        </div>
        </div>
    );
};

export default Watchs;