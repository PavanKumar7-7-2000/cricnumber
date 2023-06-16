// import logo from "./logo.svg";
// import { Users } from "./components/dummyData";
import React from "react"; // useState, // useRef, // useReducer, // useEffect, // createContext,
import "./App.css";
// import Routing from "./components/Routings";
import Routingtwo from "./components/Routingtwo";
// // import axios from "axios";
// import CloseFriend from "./components/CloseFriend";
// // import Greet from "./components/Greet";
// import Welcomes from "./components/welcomes";
import ComponentV from "./components/componentV";
import Number from "./components/Number";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// const gain = 0;

// export const CountContext = createContext(5);
// const initialState = { age: 10, time: 1 };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "big":
//       return { ...state, age: state.age + action.value };
//     case "decrement":
//       return { age: state.age - 1 };
//     case "reset":
//       return initialState;
//     default:
//       return { age: state.age };
//   }
// };
function App() {
  // const [game, setGame] = useState(10000);

  // //   //   const [count, dispatch] = useReducer(reducer, initialState);
  // //   //   const [post, setPost] = useState({});
  // //   //   const [id, setid] = useState(1);
  // //   //   const [idz, setidz] = useState(1);
  // //   //   const [idzm] = useRef("");
  // //   //   useEffect(() => {
  // //   //     document.title = count.age;
  // const handelers = () => {
  //   setGame(10);
  // };
  //   //     axios
  //   //       .get(`https://jsonplaceholder.typicode.com/posts/${idz}`)
  //   //       .then((res) => {
  //   //         console.log(res);
  //   //         setPost(res.data);
  //   //       })
  //   //       .catch((err) => {
  //   //         console.log(err);
  //   //       });
  //   //   }, [idz, count]);
  //   //   function handler() {
  //   //     setidz(id);
  //   //   }
  return (
    // //     {/* // <CountContext.Provider
    // //     //   value={{ countState: count, Dispatch: dispatch, gain }}
    // //     // >
    // //     //   <div>
    // //     //     <input
    // //     //       type="text"
    // //     //       value={id}
    // //     //       onChange={(e) => setid(e.target.value)}
    // //     //     ></input>
    // //     //     {idzm}
    // //     //     {/* <ul>
    // //     //       {posts.map((post) => {
    // //     //         return <li key={post.id}>{post.title} </li>;
    // //     //       })}
    // //     //     </ul> */}
    // //     //     <h1>{post.title}</h1>
    // //     //     <button onClick={handler}>axios</button>
    // //     //     {/* ${gain}
    // //     //     {posts} */}
    // //     //     <ComponentA />
    // //     //     <ComponentB />
    // //     //   </div>
    // //     // </CountContext.Provider> */}
    // <Routes>
    //   {/* <Route exact path="/">
    //     <Welcomes />
    //   </Route> */}
    //   {/* <div className="container"> */}
    //   {/* <Welcomes /> */}
    //   {/* <h1>{game}</h1> */}
    //   <Route path="/login" element={<ComponentV />} />
    //   {/* <ComponentV setGame={setGame} handelers={handelers} /> */}
    //   {/* {Users.map((u) => (
    //     <CloseFriend key={u.id} user={u} /> */}
    //   {/* ) */}
    //   {/* )} */}
    // </Routes>
    <>
      <div className="topbar">Cricket batting numbers</div>

      <Routes>
        <Route path="/" element={<Number />} />
        <Route path="/two" element={<Routingtwo />} />
        <Route path="/login" element={<ComponentV />} />
        {/* <Route path="/" element={<Routing />} /> */}
      </Routes>

      <div className="footer"></div>
    </>
  );
}
export default App;
