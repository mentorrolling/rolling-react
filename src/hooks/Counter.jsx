import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>Contador con useState</h1>
      <hr />
      <h3>Contador: {counter}</h3>
      <button
        className="btn btn-success mr-2"
        onClick={() => setCounter(counter + 1)}
      >
        +1
      </button>
      <button className="btn btn-secondary mr-2" onClick={() => setCounter(0)}>
        Reset
      </button>
      <button
        className="btn btn-success"
        onClick={() => setCounter(counter - 1)}
      >
        -1
      </button>
    </div>
  );
}
