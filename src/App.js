import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const wordWritten = (e) => {
    // setCounter(e.target.value.length);
    setCounter(e.target.value.split(" ").length);
  };

  
    


  return (
    <div className="App">
      <h2>Word limit input</h2>
      <input type="text" placeholder="Enter Limit" />
      <br /> <br />
      <input
        type="text"
        placeholder="Enter the text"
        onChange={wordWritten}/>
      <h3>Total number of words written {counter}</h3>
      <h3>Total number of character used</h3>
    </div>
  );
}
