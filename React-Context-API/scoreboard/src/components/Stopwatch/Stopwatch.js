import { useState, useEffect } from 'react';
import "./Stopwatch.css";

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapseTime, setElapseTime] = useState(0);

  useEffect(() => {
    let id;
    if (isRunning) {
      id = setInterval(() => {
        setElapseTime(prevState => prevState + 1);
      }, 1000);
    }

    return () => clearInterval(id);
  }, [isRunning]);

  return (
    <div className="Stopwatch">
      <h2>Stopwatch</h2>
      <span className="elapse-time">{elapseTime}</span>
      <div className="action">
        <button onClick={() => setIsRunning(prevState => !prevState)}>{isRunning ? 'Stop' : 'Start'}</button>
        <button>Reset</button>
      </div>
    </div>
  );
};
