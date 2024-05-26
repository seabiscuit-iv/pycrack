import { useState } from "react";

interface LangButtonProps {
  name: string,
  toggle: () => void,
  get: () => boolean
}

function LangButton(props : LangButtonProps) {
  const [seed, setSeed] = useState(1);

  console.log(props.name + ": " + props.get());
  

  return (
    <div className="flex flex-row font-jb-mono my-2">
      <div className="border-4 border-r-2 p-2 w-36 bg-[#2b2f42]">
        <p>{props.name}</p>
      </div>
      <button onClick={() => {props.toggle(); setSeed(Math.random())}} className={"border-4 border-l-2 p-2 w-20 hover:bg-[#383e57]" + (props.get() ? " bg-[#2b2f42]" : "")}>
        <p>
          {props.get() ? "true" : "false"}
        </p>
      </button>
    </div>
  )
}

export default LangButton;