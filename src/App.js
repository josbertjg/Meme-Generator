import { React, useState } from 'react';
//STYLES
import './styles/index.scss';
//COMPONENTS
import Selector from './components/Selector';
import Input from './components/Input';
import Meme from './components/Meme';
import html2canvas from 'html2canvas';

function App() {

  let [img,setImg]=useState('fuego');
  let [topInput,setTopInput]=useState('Line 1');
  let [bottomInput,setBottomInput]=useState('Line 2');

  let download = ()=>{
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img= canvas.toDataURL("image/png");
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
    <div className="App container">
      <h1>Developed on ReactJS By <a href='https://josbertjg.github.io/' target='_blank'>Josbert Guedez</a></h1>
      <Selector cambiarImg={(e)=>setImg(e.target.value)} />
      <Input handleType={(e)=>setTopInput(e.target.value)} isTop={true} />
      <Input handleType={(e)=>setBottomInput(e.target.value)} isTop={false} />
      <Meme img={img} top={topInput} bottom={bottomInput} />
      <button onClick={download}>Download</button>
    </div>
  );
}

export default App;
