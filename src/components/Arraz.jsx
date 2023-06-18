import React, { useRef, useState } from "react";

function Arraz() {
  const [names, setnames] = useState([
    { name: "ranjith", id: 1 },
    { name: "ranjithfunker", id: 2 },
    { name: "ranjithcontentcreator", id: 3 },
  ]);
  const namesm = useRef(0);
  const handler = (n = 0) => {
    n = names;
    // setnames([{ ...names, c: "bbb" }]);
    console.log(n);
  };
  const sorter = () => {
    const namesnew = names.sort((a, b) => -b.id - a.id);
    // console.log(namesnew);
    setnames(
      //names.sort((a, b) => -b.id - a.id)    / notwork copy array  needded
      [...names].sort((a, b) => -b.id - a.id)
    );
    // setnames([{ ...names, c: "bbb" }]);
    console.log(names);
  };
  // console.log(0);
  // console.log(names
  const handlers = (id) => {
    const filter = names.filter((name) => name.id !== id[0]);
    setnames(filter);
    console.log(names);
  };
  const mapper = () => {
    const filter = names.every((name) => name.id > 0);
    // setnames(filter);
    const filters = names.some((name) => name.id > 2);
    console.log(filter);
    console.log(filters);
  };
  // console.log(names);
  return (
    <>
      <button onClick={handler}>names</button>;
      <button onClick={mapper}>mapper</button>;
      <button onClick={sorter}>sort</button>;
      <button onClick={() => handlers([1, 2])}>update</button>;
      <div>
        <div>
          {" "}
          {names.map((names) => (
            <div>{names.a}</div>
          ))}{" "}
        </div>
        {/* <div> */}
        {names ? <>100</> : <>200</>}
        <div>{namesm.current === 0 && <>10000</>}</div>
        {/* </div> */}
        {/* ))} */}
      </div>
      {/* <button onClick={() => handler(4)}>namesay</button>; */}
      {names.map((name) => name.name)}
    </>
  );
}
export default Arraz;
