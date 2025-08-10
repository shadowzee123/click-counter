import React, { useState } from "react";
import "./ClickCounter.css";

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const limit = 10; // Maximum value before message shows

  const handleIncrease = () => {
    if (count < limit) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter</h1>
      <p className="count">{count}</p>

      {count === limit && (
        <p className="warning">🎯 You've reached the limit!</p>
      )}

      <div className="buttons">
        <button onClick={handleDecrease} className="btn decrease">
          ➖ Decrease
        </button>
        <button onClick={handleIncrease} className="btn increase">
          ➕ Increase
        </button>
      </div>
    </div>
  );
}
