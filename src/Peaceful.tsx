import { useState } from "react";
import MainQuerier from "./MainQuerier";
import Menu from "./Menu";
import { populateQuestions } from "./content/formQuestions";
  

function Peaceful() {
  const [seed, setSeed] = useState(1);
  const [count, setCount] = useState(0);

  populateQuestions();

  // const ref = useRef<ResetFunc>(null);

  const reload = () => { //only reload on correct answer
    setSeed(Math.random());
    setCount(count + 1);
  }

  const reset = () => {
    setSeed(Math.random());
    // ref.current?.resetTimer();
  }

  return (
    <div>
      <Menu reload={(reset)} />
      <div className="mx-96 flex flex-col items-center p-2">
        <p className="text-green-200 font-jb-mono font-extrabold text-3xl pt-12 pb-10">PyCrack</p>
        {/* <Timer ref={ref}  /> */}
        <MainQuerier seed={seed} reload={reload}/>
        <p className="text-white font-jb-mono font-medium text-xl">Score: {count}</p>
      </div>
    </div>
  );
}

export default Peaceful;
