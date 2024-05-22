var javascriptQuestions = {
    data: [
        {
            lang: "javascript",
            code: `const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((a, b) => a + b));`,
            answer: "15"
        },
        {
            lang: "javascript",
            code: `const str = "Hello, World!";
console.log(str.split("").reverse().join(""));`,
            answer: "!dlroW ,olleH"
        },
        {
            lang: "javascript",
            code: `const obj = {
    name: "Alice",
    greet: function() {
        console.log(\`Hello, my name is \${this.name}\`);
    }
};
obj.greet();`,
            answer: "Hello, my name is Alice"
        },
        {
            lang: "javascript",
            code: `const arr = [1, 2, 3, 4, 5];
const [first, ...rest] = arr;
console.log(rest);`,
            answer: "[2, 3, 4, 5]"
        },
        {
            lang: "javascript",
            code: `const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(x => x * 2);
console.log(mappedArr);`,
            answer: "[2, 4, 6, 8, 10]"
        },
        {
            lang: "javascript",
            code: `const num = 42;
console.log(num.toString(2));`,
            answer: "101010"
        },
        {
            lang: "javascript",
            code: `console.log("Hello, World!");`,
            answer: "Hello, World!"
        },
        {
            lang: "javascript",
            code: `let x = 5;
let y = 3;
console.log(x + y);`,
            answer: "8"
        },
        {
            lang: "javascript",
            code: `let x = 10;
console.log(x * 2);`,
            answer: "20"
        },
        {
            lang: "javascript",
            code: `let x = 15;
let y = 3;
console.log(x / y);`,
            answer: "5"
        },
        {
            lang: "javascript",
            code: `let x = true;
let y = false;
console.log(x && y);`,
            answer: "false"
        },
        {
            lang: "javascript",
            code: `let str = "Hello";
console.log(str.length);`,
            answer: "5"
        },
        {
            lang: "javascript",
            code: `const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        acc.even.push(curr);
    } else {
        acc.odd.push(curr);
    }
    return acc;
}, { even: [], odd: [] });
console.log(result);`,
            answer: "{ even: [2, 4], odd: [1, 3, 5] }"
        },
        {
            lang: "javascript",
            code: `function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));`,
            answer: "55"
        },
        {
            lang: "javascript",
            code: `const str = "Hello, World!";
const reverseStr = str.split("").reverse().join("");
console.log(reverseStr);`,
            answer: "!dlroW ,olleH"
        },
        {
            lang: "javascript",
            code: `const obj = {
    name: "Alice",
    greet: function() {
        setTimeout(() => {
            console.log(\`Hello, my name is \${this.name}\`);
        }, 1000);
    }
};
obj.greet();`,
            answer: "Hello, my name is Alice"
        },
        {
            lang: "javascript",
            code: `const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(rest.reduce((acc, curr) => acc + curr, 0));`,
            answer: "12"
        }
    ]
}

export default javascriptQuestions;