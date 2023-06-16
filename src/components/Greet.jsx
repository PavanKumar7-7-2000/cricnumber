import React from "react";
import "./greet.css";
function Greet(pro) {
  console.log(pro);
  return (
    <div className="color">
      <h1> helllo {pro.name}</h1>;<h1>pro.children</h1>
    </div>
  );
}
export default Greet;
