import React, { useContext } from "react";
import { CountContext } from "../App";
function ComponentA() {
  const countContext = useContext(CountContext);

  return (
    <div>
      <button onClick={() => countContext.Dispatch({ type: "big", value: 5 })}>
        increase
      </button>
      <button onClick={() => countContext.Dispatch({ type: "reset" })}>
        reset
      </button>
      <button onClick={() => countContext.Dispatch({ type: "decrement" })}>
        decrement
      </button>
      <h1>hihhi</h1>
      {countContext.gain}
      {countContext.countState.age}
      {countContext.countState.time}
    </div>
  );
}
export default ComponentA;
