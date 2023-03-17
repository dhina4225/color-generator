
import React from 'react'
import './index.css'


const colors=[];


for (let i = 0; i <= 31; i++) {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(color);
};





const App = () => {
  return (
    <div className='main'>
      <div className="title-container">
        <h1 className="title">color generator</h1>
      </div>
     
        <div className="box-container">
          {colors.map((color, index) => {
            return <ColorBox color={color} index={index} key={index} />;
          })}
        </div>
      </div>
    
  );
}


// components
const ColorBox = ({ color }) => {
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
    <h1 style={{fontSize:'20px'}}>{color}</h1>
    </div>
  );
};


export default App