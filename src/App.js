import { useState } from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0);

 function handleClick(){
    setCount(count + 1);
  }

  return (
    <>
      {[...Array(count)].map((index) => (
        <div key={index} className='count-box' style={{ top: Math.random() * 400, left: Math.random() * 1000, color: `#${Math.random().toString(16).substr(-6)}` }}>{count}</div>
      ))}

      <button className='button' onClick={handleClick}>+</button>

    </>
  );
}

export default App;
