import { useState } from "react";
import MainQuerier from "./MainQuerier";
import Menu from "./Menu";


function App() {
  const [seed, setSeed] = useState(1);
  const [count, setCount] = useState(0);

  const reload = () => { //only reload on correct answer
    setSeed(Math.random());
    setCount(count + 1);
  }

  return (
    <div>
      <Menu reload={reload} />
      <div className="mx-96 flex flex-col items-center p-2">
        <p className="text-green-200 font-jb-mono font-extrabold text-3xl pt-12 pb-10">PyCrack</p>
        <MainQuerier seed={seed} reload={reload}/>
        <p className="text-white font-jb-mono font-medium text-xl">Score: {count}</p>
      </div>
    </div>
  );
}

export default App;
