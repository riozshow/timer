import styles from "./TimeControl.module.scss";
import Button from "../Button/Button";

function TimeControl({ start, pause, reset }) {
  return (
    <div className={styles.timeControl}>
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default TimeControl;
