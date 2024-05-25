import Code from "./Code";
import { getLangs } from "./content/config";
import InputField from "./InputField";
import getCode from "./utils/readJson";

interface Reload {
    reload: () => void,
    seed: number
    onCorrect?: () => void
    onIncorrect?: () => void
    clearOnIncorrect?: boolean
};

interface Question {
  lang: string,
  code: string,
  answer: string
}

function MainQuerier(props : Reload) {
  let q : Question = getCode();
  let list = getLangs();

  if (list.length === 0) {
    return (
      <div className="flex flex-col items-center p-2">
        <p className="text-lg font-semibold font-jb-mono p-4 pb-10 text-white">Please select at least one language</p>
      </div>
    )
  }

  while (!list.includes(q.lang)) {
    q = getCode();
  }

  return (
    <div className="flex flex-col items-center p-2">
      <Code lang={q.lang} code={q.code} answer={q.answer} />
      <InputField lang={q.lang} code={q.code} answer={q.answer} reload={props.reload} onCorrect={props.onCorrect} onIncorrect={props.onIncorrect} clearOnIncorrect={props.clearOnIncorrect}/>
    </div>
  );
}

export default MainQuerier;
