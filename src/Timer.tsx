import { forwardRef, useImperativeHandle } from "react";
import { useTimer } from "react-timer-hook";

interface Props {
  onExpiry?: () => void;
  initTime?: number;
};

export type ResetFunc = {
	resetTimer: () => void;
  addTime: (sec: number) => void;
};

const Timer = forwardRef<ResetFunc, Props>((props, ref) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + (props.initTime ? props.initTime : 180));

  let {
    totalSeconds,
    seconds,
    minutes,
    restart
  } = useTimer({ expiryTimestamp: time, onExpire: (props.onExpiry !== undefined) ? (props.onExpiry) : (() => {}) });

  const restartTimer = () => {
    restart(time);
  }

  const addTime = (sec: number) => {
    let temp = new Date();
    temp.setSeconds(temp.getSeconds() + totalSeconds + sec);
    restart(temp); 
  }

  useImperativeHandle(ref, () => { return {
    resetTimer: restartTimer,
    addTime: addTime
  }; });

  return (
    <div className="mb-5">
      <p className="text-white font-jb-mono font-medium text-xl">{minutes}:{seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</p>
    </div>
  );
});

export default Timer;