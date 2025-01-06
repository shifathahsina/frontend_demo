import List from './List.jsx';
import React, { useState, createContext } from 'react';
import Hen from './Hen.jsx';

export let nameContext = createContext();

function App() {
  let [color, setColor] = useState('green'); 
  let [bgcolor,setbgcolor]=useState('white');

let sample = () => {
  setColor(color === "green" ? "blue" : "green"); 
};
let sample1 = () => {
  setbgcolor(bgcolor === "white" ? "black" : "white"); 
};


  return (
    <nameContext.Provider value={{ name: 'Ruby', age: 20, color, bgcolor }}>
      <Hen />
      <button onClick={sample}>Change text</button>
      <button onClick={sample1}>Change bg</button>
    </nameContext.Provider>
  );
}

export default App;
