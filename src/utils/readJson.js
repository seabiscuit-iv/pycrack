import questions from "../content/questions";

function getCode() {
    let x = Math.floor(Math.random() * questions.data.length);
    // let x = 2;
    console.log(x);
    return questions.data[x];
}

export default getCode;