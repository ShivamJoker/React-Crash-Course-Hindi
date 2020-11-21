import React, { useState } from "react";
import { counter } from "./style.css";
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

  const incrementCount = () => {
    setCount((prv) => {
      console.log(prv);
      return prv + 1;
    });
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
    </>
  );
};
export default App;
