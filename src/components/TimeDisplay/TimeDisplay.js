import { useCallback } from "react";
import styles from "./TimeDisplay.module.scss";

function TimeDisplay({ timeMs }) {
  const getTimeData = useCallback((time) => {
    const hours = 0 + Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = Math.floor(time - hours * 3600 - minutes * 60);

    return [
      `0${hours}`.slice(-2),
      `0${minutes}`.slice(-2),
      `0${seconds}`.slice(-2),
      `00${time.toString().split(".")[1] || 0}`.slice(-3),
    ];
  }, []);

  const [hours, minutes, seconds, miliseconds] = getTimeData(timeMs / 1000);

  return (
    <div className={styles.timeDisplay}>
      <p>{hours}</p>
      <p>:</p>
      <p>{minutes}</p>
      <p>:</p>
      <p>{seconds}</p>
      <p>.</p>
      <p>{miliseconds}</p>
    </div>
  );
}

export default TimeDisplay;
