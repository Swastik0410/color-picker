import React, { useState } from 'react'

const App = () => {
 
  const [color, setcolor] = useState("#fff")
   document.body.style.backgroundColor=color;
  function buttonclicked(e){
    e.preventDefault;
    setcolor(e.target.value)
    
  }
  return (
    <div>
      <div className='btn-cont'>
        <button onClick={buttonclicked} value={"#ff0000"} >Red</button>
        <button onClick={buttonclicked} value={"#00ff00"}>Green</button>
        <button onClick={buttonclicked} value={"#0000ff"}>Blue</button>
        <button onClick={buttonclicked} value={"#00f0f0"}>Aqua</button>
        <button onClick={buttonclicked} value={"#000"}>Black</button>
        <button onClick={buttonclicked} value={"#f0f000"}>Yellow</button>
        <button onClick={buttonclicked} value={"#ff9203ff"}>Orange</button>
        <button onClick={buttonclicked} value={"#691717ff"} >Maroon</button>
      </div>
    </div>
  )
}

export default App