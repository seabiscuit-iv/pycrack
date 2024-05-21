var questions = {
    data: [
        {
            lang: "java",
            code: 
`System.out.println("Hello World!");`,
            answer: "Hello World!"
        },
        {
            lang: "c",
            code: 
`#DEFINE INSN_SP(I) = I & 0x0F;
printf("%d\\n", INSN_SP(127))`,
            answer: "31"
        },
        {
            lang: "javascript",
            code:
`function getCode() {
    return 4;
}`,
            answer: "4"
        },
        {
            lang: "python",
            code: 
`x = 4
y = 5
print(x + y)`,
            answer: "9"
        }
    ]
}

export default questions;