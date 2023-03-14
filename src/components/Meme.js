import React from 'react';
import '../styles/index.scss';

function Meme({ img, top, bottom }){
  return (
    <div id='meme'>
      <h1 className='topText'>{top}</h1>
      <h1 className='bottomText'>{bottom}</h1>
      <img src={require(`../img/${img}.jpg`)} alt={`meme ${img}`} />
    </div>
  );
};
export default Meme;