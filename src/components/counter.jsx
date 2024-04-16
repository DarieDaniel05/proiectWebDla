import React from "react";
import "./counter.css";
import { Button } from "antd";
import { useState } from "react";
function counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <div className="counterContainer">
        <h1>Counter App</h1>

        <div className="counterValue">
          <h1>{count}</h1>
        </div>

        <div className="increaseDecrease">
          <Button
            danger
            type="primary"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrease
          </Button>
          <Button
            type="primary"
            primary
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increase
          </Button>
        </div>
      </div>
    </div>
  );
}

export default counter;
