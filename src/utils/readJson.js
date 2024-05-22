import { questions } from "../content/formQuestions";

function getCode() {
    let x = Math.floor(Math.random() * questions.data.length);
    // console.log("Size:", questions.data.length);
    // console.log(x);
    return questions.data[x];
}

export default getCode;