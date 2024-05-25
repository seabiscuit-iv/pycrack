import { useRef, useState } from "react";
import MainQuerier from "./MainQuerier";
import Menu from "./Menu";
import { ResetFunc } from "./Timer";
import { populateQuestions } from "./content/formQuestions";

interface ExpiryFunc {
  expiryFunc: (scr: number) => void;
}

function RPG(props : ExpiryFunc) {
  const [seed, setSeed] = useState(1);
  const [lives, setLives] = useState(3);
  const [count, setCount] = useState(0);

  populateQuestions();

  const ref = useRef<ResetFunc>(null);

  const reload = () => { //only reload on correct answer
    setSeed(Math.random());
    setCount(count + 1);
  }

  const reset = () => {
    setSeed(Math.random());
    ref.current?.resetTimer();
    setLives(3);
  }

  return (
    <div>
      <Menu reload={(reset)} />
      <div className="mx-96 flex flex-col items-center p-2">
        <p className="text-green-200 font-jb-mono font-extrabold text-3xl pt-12 pb-10">PyCrack</p>
        <ul className="flex flex-wrap items-center justify-center text-white mb-4">
          {lives >= 1 ? <li><img src="heart.png" alt="Life" className="size-12 mx-1"/></li> : ""}
          {lives >= 2 ? <li><img src="heart.png" alt="Life" className="size-12 mx-1"/></li> : ""}
          {lives >= 3 ? <li><img src="heart.png" alt="Life" className="size-12 mx-1"/></li> : ""}
        </ul>
        <MainQuerier seed={seed} reload={reload} onIncorrect={() => { lives === 1 ? props.expiryFunc(count) : setLives(lives-1)}} clearOnIncorrect/>
        <p className="text-white font-jb-mono font-medium text-xl">Score: {count}</p>
      </div>
    </div>
  );
}

export default RPG;
