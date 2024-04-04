import "./App.css";
import Counter from "./components/Counter";

import Exponent from "./components/Exponent";

import { useState } from "react";


function App () {
  const [count, setCount] = useState(5);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);
  
  
  

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} decrement={decrement} increment={increment}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count={count} exponent= {2}/>
        <Exponent count={count} exponent= {3}/>
        <Exponent count={count} exponent= {4}/>
        <Exponent count={count} exponent= {5}/>
        <Exponent count={count} exponent= {6}/>
      </div>
    </div>
  );
}

export default App;
