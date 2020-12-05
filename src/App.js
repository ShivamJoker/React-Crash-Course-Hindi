import React, { useRef, useState } from "react";
import { counter } from "./style.css";
import ouch from "url:../public/ouch.mp3";

// const isEven = (count) => {
//   if (count % 2 === 0) {
//     return "It's even babe";
//   } else {
//     return "It's odd";
//   }
// };

/** return is even or odd in true false */
const isEven = (count) => count % 2 === 0;

const App = () => {
  const [count, setCount] = useState(0);
  const audioElRef = useRef(null);

  const incrementCount = () => {
    setCount((prv) => {
      console.log(prv);
      return prv + 1;
    });
    // console.log(audioElRef);
    audioElRef.current.play();
    // console.log("You pushed");
  };
  //   if (count === 25) {
  //     return <h1>It's your 25th </h1>;
  //   }
  return (
    <>
      <h1
        className={counter}
        style={{ color: isEven(count) ? "violet" : "tomato" }}
      >
        Count: {count}
      </h1>
      <h3>
        {count % 2 === 0 ? "Babua ee ta even hai" : "Ee ta odd babu hai "}
      </h3>
      <button onClick={incrementCount}>Push Me!</button>
      <audio src={ouch} ref={audioElRef}></audio>
    </>
  );
};
export default App;
