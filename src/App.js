import TimeDisplay from "./components/TimeDisplay/TimeDisplay";
import TimeControl from "./components/TimeControl/TimeControl";
import { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState();
  const [time, setTime] = useState(0);
  const [startTimestamp, setStartTimestamp] = useState(0);
  const [cachedTimeAmount, setCachedTimeAmount] = useState(0);

  const resetTimer = () => {
    if (timer) clearInterval(timer);
    setTimer();
  };

  const handleStart = () => {
    if (timer) return;
    setStartTimestamp(Date.now());
  };

  const handlePause = () => {
    resetTimer();
    setCachedTimeAmount(time + cachedTimeAmount);
    setTime(0);
  };

  const handleReset = () => {
    resetTimer();
    setCachedTimeAmount(0);
    setTime(0);
  };

  useEffect(() => {
    return () => resetTimer();
  }, []);

  useEffect(() => {
    if (startTimestamp > 0) {
      setTimer(
        setInterval(() => {
          setTime(Date.now() - startTimestamp);
        }, 75)
      );
    }
  }, [startTimestamp]);

  return (
    <div className="App">
      <TimeDisplay timeMs={time + cachedTimeAmount} />
      <TimeControl
        start={handleStart}
        pause={handlePause}
        reset={handleReset}
      />
    </div>
  );
}

export default App;
