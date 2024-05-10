import { Button } from "common/Components";
import React, { useEffect, useState } from "react";

let interval: NodeJS.Timeout;
const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const startInterval = () => {
    interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 100);
  };
  const handleStartClick = () => {
    setIsRunning(true);
    startInterval();
    setLaps([]);
  };
  const handleStopClick = () => {
    if (isRunning) {
      console.log("STOP:::", interval);
      setIsRunning(false);
      setTimer(0);
      clearInterval(interval);
      setLaps((prev) => [...prev, timer / 10]);
    }
  };
  const handlePauseClick = () => {
    console.log("ISPAUSED:::", isPaused);
    if (!isPaused) {
      //   setLaps((prev) => [...prev, timer / 10]);
      clearInterval(interval);
    } else {
      startInterval();
    }
    setIsPaused(!isPaused);
  };
  const handleLapClick = () => {
    if (isRunning) {
      setLaps((prev) => [...prev, timer / 10]);
    }
  };
  useEffect(() => {
    // we have to clear the interval when the componentis unmouniting
    // otherwise the interval will not clear it will trigger for every 1s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <div>
        <h3>{timer / 10}</h3>
      </div>
      {!isRunning && <Button onClick={handleStartClick} title="Start" />}

      <Button onClick={handleStopClick} title="Stop" />
      {isRunning && (
        <>
          <Button onClick={handleLapClick} title="Lap" />
          <Button
            onClick={handlePauseClick}
            title={isPaused ? "Resume" : "Pause"}
          />
        </>
      )}

      <div>
        {laps.map((lap, idx) => {
          return (
            <li key={idx}>
              {idx + 1}. {lap}secs
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Timer;
