import Code from "./Code";
import InputField from "./InputField";
import getCode from "./utils/readJson";

interface Reload {
    reload: () => void,
    seed: number
};

function MainQuerier(props : Reload) {
  let q = getCode();

  return (
    <div className="flex flex-col items-center p-2">
      <Code lang={q.lang} code={q.code} answer={q.answer} />
      <InputField lang={q.lang} code={q.code} answer={q.answer} reload={props.reload}/>
    </div>
  );
}

export default MainQuerier;
