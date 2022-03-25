import React from 'react';
import './Random.css'
const Random = ({random}) => {
    console.log(random)
    return (
         
        
        <div className='random'>
         
          <h1>Number :{random} has been selected</h1>
        </div>
    );
};

export default Random;