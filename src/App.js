import React, { useEffect, useState } from "react";
import './App.css';
import AppHeader from './components/AppHeader';
import FurItem from './components/FurItem';
import FurPost from './components/FurPost';
import FurAll from './data/FurAll';  // data furniture image and titles


function App() {
  const [selectFur, setSelectFur] = useState("ForAll[0]");
  const FurElements = FurAll.map((fur, index)=>{
    return <FurItem key={index} fur={fur}/>
  });

  let furpost = null;
  if(!!selectFur){
    furpost = <FurPost fur={selectFur}/>
  }

  return (
    <div className="app">
       
      <p></p>

      <div className="app-grid">
        {FurElements}       
      </div> 
      
    </div>
  )
}

export default App;
