import React from "react";
import "./styles.scss";
import Timer from "./components/Timer";

const CountdownTimer = () => {
  return (
    <div className="countdown-timer-wrapper">
      <div className="countdown-timer">
        <h1 className="font-bold">COUNT DOWN TIMER</h1>
        <Timer />
      </div>
    </div>
  );
};

export default CountdownTimer;
