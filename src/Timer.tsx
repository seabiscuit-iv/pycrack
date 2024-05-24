import { forwardRef, useImperativeHandle } from "react";
import { useTimer } from "react-timer-hook";

interface Props {
  onExpiry?: () => void;
};

export type ResetFunc = {
	resetTimer: () => void;
};

const Timer = forwardRef<ResetFunc, Props>((props, ref) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  const {
    seconds,
    minutes,
    restart
  } = useTimer({ expiryTimestamp: time, onExpire: (props.onExpiry !== undefined) ? (props.onExpiry) : (() => {}) });

  const restartTimer = () => {
    restart(time); 
  }

  useImperativeHandle(ref, () => { return {
    resetTimer: restartTimer
  }; });

  return (
    <div className="mb-5">
      <p className="text-white font-jb-mono font-medium text-xl">{minutes}:{seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</p>
    </div>
  );
});

export default Timer;