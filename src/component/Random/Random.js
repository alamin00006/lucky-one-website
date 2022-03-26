import React from 'react';
import './Random.css'
const Random = ({random}) => {
      return (
         
        
        <div className='random'>
         
          <h1>Name :<small className='text-danger'>{random}</small> has been selected</h1>
        </div>
    );
};

export default Random;