import React, { useState } from "react";
import styles from "./counter.module.css";

function Counter({ initialvalue }) {
  //getting initial value dinamically
  const [counter, setCounter] = useState(initialvalue); //initial value
  let color = counter % 2;

  return (
    <>
      <h1>Counter</h1>
      <h2 className={color ? styles.mod : styles.mode}>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => {if (counter > 0) {setCounter(counter - 1); }}}>-</button>
      <button onClick={() => setCounter(counter * 2)}>Get multiple</button>
    </>
  );
}

export { Counter };
