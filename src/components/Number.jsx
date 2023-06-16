import React, {
  useEffect,
  //  useRef,
  useState,
} from "react";
import "./number.css";
function Number() {
  const [am, setam] = useState([]);
  const [members, setmembers] = useState(5);
  // const [memberss, setmemberss] = useState(true);
  const hand = (amn) => {
    let a = [];
    let i = 0;

    for (i = 0; i < amn; i++) {
      a.push(i + 1);
    }
    return a;
  };
  useEffect(() => {
    const handdel = (members) => {
      let a = hand(members);
      // a=a.sort(()=>Math.random()-0.5.map(()=>()))
      //
      a = a.sort((a, b) => 0.5 - Math.random());
      setam(a);
    };
    handdel(members);
  }, [members]);
  // const handdel = (me) => {
  //   const a = hand(me);
  //   setam(a);

  console.log(0);
  console.log(am);
  console.log(members);
  console.log(1);
  return (
    <>
      {/* <div>
        <input
          className="input"
          type="text"
          onClick={(e) => setmembers(e.target.value)}
        />
      </div> */}

      {/* <button onClick={() => handdel(members)}>Number</button> */}
      {/* {<button onClick={() => setmemberss(!memberss)}>Number</button>} */}
      <div className="contain">
        {am.map((e) => (
          <div className="bloc">
            <div className="box">{e}</div>
            <div className="bar">hover above</div>
          </div>
        ))}
      </div>
      <div className="contain">
        <input
          className="input"
          type="text"
          onClick={(e) => setmembers(e.target.value)}
        />
      </div>
      {/* <dir>{members}</dir> */}
    </>
  );
}
export default Number;
