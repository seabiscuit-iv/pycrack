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
        },
        {
            "lang": "python",
            "code": "print(5 + 3)",
            "answer": "8"
        },
        {
            "lang": "javascript",
            "code": "console.log(2 * 3);",
            "answer": "6"
        },
        {
            "lang": "java",
            "code": "System.out.println(10 / 2);",
            "answer": "5"
        },
        {
            "lang": "c",
            "code": 
`#include <stdio.h>
int main() { 
    printf("%d\\n", 10 - 4); 
    return 0; 
}`,
            "answer": "6"
        },
        {
            "lang": "python",
            "code": "print('A' * 3)",
            "answer": "AAA"
        },
        {
            "lang": "javascript",
            "code": "console.log('Hello' + ' ' + 'World');",
            "answer": "Hello World"
        },
        {
            "lang": "java",
            "code": "System.out.println(7 % 4);",
            "answer": "3"
        },
        {
            "lang": "c",
            "code": 
`#include <stdio.h>
int main() { 
    printf("%d\\n", 3 + 5 * 2); 
    return 0;
}`,
            "answer": "13"
        },
        {
            "lang": "python",
            "code": "print(len('hello'))",
            "answer": "5"
        },
        {
            "lang": "javascript",
            "code": "console.log(10 > 5);",
            "answer": "true"
        },
        {
            "lang": "java",
            "code": "System.out.println(15 / 4);",
            "answer": "3"
        },
        {
            "lang": "c",
            "code": 
`#include <stdio.h>
int main() { 
    printf("%c\\n", 'A' + 1); 
    return 0;
}`,
            "answer": "B"
        },
        {
            "lang": "python",
            "code": "print(2 ** 3)",
            "answer": "8"
        },
        {
            "lang": "javascript",
            "code": "console.log(typeof 42);",
            "answer": "number"
        },
        {
            "lang": "java",
            "code": "System.out.println(\"Hello\".length());",
            "answer": "5"
        },
        {
            "lang": "c",
            "code": 
`#include <stdio.h>
int main() { 
    printf("%d\\n", 1 << 3);
    return 0; 
}`,
            "answer": "8"
        },

        {
            lang: "python",
            code: "print(len('Hello, World!'))",
            answer: "13"
        },
        {
            lang: "javascript",
            code: "console.log(10 % 3);",
            answer: "1"
        },
        {
            lang: "java",
            code: "System.out.println(\"Java\".charAt(2));",
            answer: "v"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
int main() {
    printf("%d\\n", 5 & 3);
    return 0;
}`,
            answer: "1"
        },
        {
            lang: "python",
            code: "print(3 * 2 + 1)",
            answer: "7"
        },
        {
            lang: "javascript",
            code: "console.log('Hello'.substring(1, 4));",
            answer: "ell"
        },
        {
            lang: "java",
            code: "System.out.println(\"Hello\\nWorld\");",
            answer: "Hello\\nWorld"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
int main() {
    int x = 5;
    printf("%d\\n", ++x);
    return 0;
}`,
            answer: "6"
        },
        {
            lang: "python",
            code: "print('Hello' + ' ' + 'World')",
            answer: "Hello World"
        },
        {
            lang: "javascript",
            code: "console.log(Math.max(10, 20, 15));",
            answer: "20"
        },
        {
            lang: "python",
            code: "print(sum(x**2 for x in range(5)))",
            answer: "30"
        },
        {
            lang: "javascript",
            code: "console.log([1, 2, 3].reduce((a, b) => a + b));",
            answer: "6"
        },
        {
            lang: "java",
            code: "System.out.println(Integer.bitCount(42));",
            answer: "3"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
int main() {
    int x = 10;
    printf("%d\\n", x >>= 1);
    return 0;
}`,
            answer: "5"
        },
        {
            lang: "python",
            code: "print('bleh'.join(['Hello', 'World']))",
            answer: "HelloblehWorld"
        },
        {
            lang: "javascript",
            code: "console.log(Math.pow(2, 3) === 8 ? 'true' : 'false');",
            answer: "true"
        },
        {
            lang: "java",
            code: "System.out.println(\"Hello\".indexOf('l', 3));",
            answer: "3"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
int main() {
    int x = 5, y = 3;
    printf("%d\\n", x ^ y);
    return 0;
}`,
            answer: "6"
        },
        {
            lang: "python",
            code: "print('Hello' * 3)",
            answer: "HelloHelloHello"
        },
        {
            lang: "javascript",
            code: "console.log([1, 2, 3, 4].filter(x => x % 2 === 0));",
            answer: "2, 4"
        }

    ]
}

export default questions;