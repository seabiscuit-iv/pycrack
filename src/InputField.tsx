import { useState } from "react";

interface QuestionReload {
  lang : string,
  code : string,
  answer : string,
  reload : ()=>void
}

const baseColor = "bg-[#1f2123]";
const incorrectColor = "bg-[#a74747]";

function InputField(props : QuestionReload) {
  const [ans, setAns] = useState('');
  const handleEnter = (e : React.FormEvent) => {
    e.preventDefault();
    if (props.answer === ans) {
      console.log("CORRECT");
      document.getElementById("mainform")?.classList.remove(incorrectColor);
      document.getElementById("mainform")?.classList.add(baseColor);
      setAns("");
      props.reload();
    } else {
      console.log("INCORRECT");
      document.getElementById("mainform")?.classList.remove(baseColor);
      document.getElementById("mainform")?.classList.add(incorrectColor);
    }
  }

  return (
    <form className="py-8" onSubmit={handleEnter}>
      <input 
      type="input" 
      placeholder="Answer..." 
      className={"w-[35rem] rounded-xl h-[4rem] p-5 text-white font-jb-mono text-lg " + baseColor}
      id="mainform"
      value={ans}
      onChange={(e) => setAns(e.target.value)}
      />
    </form>
  );
}

export default InputField;