import { useState, useRef, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../photo/blank_profile_picture.png";
import "../components/componentv.css";
//eslint - disable - next - line;
const Fun1 = () => {
  // const Handler = (Prevstates) => {
  //   setStates(!Prevstates);
  // };
  return (
    <>
      {/* <img
        // src={"../../photos/blank_profile_picture.png"}
        src={logo}
        alt="not there in the location "
        className="classic"
        onClick={Handler}
      /> */}
      <div className="cla" color="red">
        compocbs
        <div>
          compocbs heloo jsxjhhhhhhhh
          <h1>hjf</h1>
          Lorem ipsum, dolor sit s aliquam,
        </div>
      </div>
    </>
  );
};
const Fun2 = () => {
  // const [states, setStates] = useState("true");
  // const Handler = (Prevstates) => {
  //   setStates(!Prevstates);
  // };
  return (
    <>
      {/* <img
        // src={"../../photos/blank_profile_picture.png"}
        src={logo}
        alt="not there in the location "
        className="classic"
        onClick={Handler}
      /> */}
      <div className="clas" color="red">
        compocbs
        <div>
          compocbs heloo jsxjhhhhhhhh
          <h1>hjf</h1>
          Lorem ipsum, dolor sit s aliquam,
        </div>
      </div>
      ;
    </>
  );
};
function ComponentV() {
  const [states, setStates] = useState("true");
  const socket = useRef(0);
  console.log(socket.current);
  console.log(states);
  useEffect(() => {
    const Handler = () => {
      setStates((prev) => !states);
    };
    // const handel = () => {
    //   setGame(10000);
    // };
    Handler();
    // handel();
  }, [states]);
  // const Handler = () => {
  //   setStates(!states);
  // };
  // const handel = () => {
  //   setGame(10000);
  // };
  return (
    <>
      hello
      <Link className="login" to="/login">
        login
      </Link>
      <Link className="login" to="/two">
        two
      </Link>
      {/* <img
        // src={"../../photos/blank_profile_picture.png"}
        src={logo}
        alt="not there in the location "
        className="classic"
        onClick={Handler}
      /> */}
      {states === true ? <Fun1 /> : <Fun2 />}
      <img
        // src={"../../photos/blank_profile_picture.png"}
        src={logo}
        alt="not there in the location "
        className="classic"
        // onClick={Handler}
      />
      <div>
        <button ref={socket}>click</button>
        {/* <button onClick={handel}>click</button> */}
      </div>
      {/* <div className="cla" color="red">
        compocbs
        <div>
          compocbs heloo jsxjhhhhhhhh
          <h1>hjf</h1>
          Lorem ipsum, dolor sit s aliquam,
        </div>
      </div>
      <div className="clas" color="red">
        compocbs
        <div>
          compocbs heloo jsxjhhhhhhhh
          <h1>hjf</h1>
          Lorem ipsum, dolor sit s aliquam,
        </div>
      </div> */}
    </>
  );
}
export default ComponentV;
