import React from "react";
import "./App.css";
import { Counter } from "./counter/counter";

function App() {
  return (
    <div className="App">
      <Counter initialvalue={10} />
    </div>
  );
}

export default App;
