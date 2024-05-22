import cQuestions from "./cQuestions";
import javaQuestions from "./javaQuestions";
import javascriptQuestions from "./javascriptQuestions";
import pythonQuestions from "./pythonQuestions";

var questions = {
    data: [
        {
            lang: "java",
            code: `int num = 5;
int factorial = IntStream.rangeClosed(1, num)
                .reduce(1, (a, b) -> a * b);
System.out.println(factorial);`,
            answer: "120"
        }
    ],
    populated: false
};

function populateQuestions() {
    if(questions.populated) {
        return;
    }
    console.log("Populating Questions");
    questions.data = questions.data.concat(pythonQuestions.data);
    questions.data = questions.data.concat(cQuestions.data);
    questions.data = questions.data.concat(javaQuestions.data);
    questions.data = questions.data.concat(javascriptQuestions.data);
    questions.populated = true;
}

export { populateQuestions, questions };

