import React from 'react';
//STYLES
import '../styles/index.scss';

function Input({ handleType, isTop }){
  return (
    <input className='form-control mb-2' onChange={handleType} type='text' placeholder={`Line ${(isTop)?'1':'2'}`}/>
  );
};
export default Input;