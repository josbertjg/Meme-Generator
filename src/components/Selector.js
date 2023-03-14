
import React from 'react';
//STYLES
import '../styles/index.scss';


function Selector({ cambiarImg }){

  return (
    <select onChange={cambiarImg} className='form-control mb-2'>
      <option hidden selected>Choice a Meme</option>
      <option value="fuego">Casa en llamas</option>
      <option value="futurama">Futurama</option>
      <option value="history">History Channel</option>
      <option value="matrix">Matrix</option>
      <option value="philosoraptor">PhilosoRaptor</option>
      <option value="smart">Smart Guy</option>
    </select>
  );

};

export default Selector;