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
        <div className='container'>
            <h4>How to React works :</h4>
            <p> রিয়েক্ট এ কাজ করার জন্য প্রথমত আমাদের দুইটা  নোট  প্যাকেজ দরকার একটি  হল রিয়াক্ট ,আরেকটি হলো রিয়েক্ট dom . একটা কম্পনেন্ট যখন লেখা হয় এটা তখন পিউর জাবস্ক্রিপট থাকে, এই  জাভাস্ক্রিপ্ট কে এইচটিএমএল কোডে  কনভার্ট করার জন্য রিয়েক্ট নামক প্যাকেজটি use  হয়। এরপরে html  file এ html  কোড কে ইঞ্জেক্ট করতে হবে আর এটা করার জন্য react dom  প্যাকেজ টি  use হয়।  রিয়াক্ট real dom এর  পাশে একটি ভার্চুয়াল dom create  করে এরপরে যখন কোন কম্পোনেন্ট এর ভিতর কোন কিছু চেঞ্জ করা হয় তখন রিয়েক্ট ভার্চুয়াল dom এর সাথে রিয়েল dom এর  কম্পেয়ার করে। 
            যখন দেখে  চেঞ্জ হয়েছে তখন react  তা সেট করে দেয়।</p>

            <h4>How to useState works :</h4>
            <p>
            useState()একটি স্পেশাল ফাংশন। 
            React , মূলত নরমাল ভাবে আমরা code  এ  কোন কিছু চেঞ্জ করলে  তা বুঝেনা,তাকে বোঝানোর জন্য মূলত useState() funtion টি  ব্যবহার করা হয়. কোন কিছু চেঞ্জ করে তা useState() এ set করে দিলে react তা বুঝে real dom এ চেঞ্জ করে দেয়.আরেকটি উল্লেখযোগ্য এটির  নিয়ম  হল এটিতে default value সেট করে দিতে হয়.
            </p>
        </div>
        
        </div>
    );
};

export default Watchs;