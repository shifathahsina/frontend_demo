import React, { useContext } from 'react';
import { nameContext } from './App.jsx';

function Stomach() {
  const { name, age, color, bgcolor} = useContext(nameContext); 

  return (
    <h1 style={{ color: color, backgroundColor: bgcolor }}>
  Stomach: {name} and {age}
</h1>

  );
}

export default Stomach;
