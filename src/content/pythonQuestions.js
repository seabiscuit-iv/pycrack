var pythonQuestions = {
    data: [
        {
            lang: "python",
            code: "print(''.join(reversed('Python')))",
            answer: "nohtyP"
        },
        {
            lang: "python",
            code: "print(list(map(lambda x: x**2, [1, 2, 3, 4])))",
            answer: "[1, 4, 9, 16]"
        },
        {
            lang: "python",
            code: "print(max([len(x) for x in ['Hello', 'World', 'Python']]))",
            answer: "6"
        },
        {
            lang: "python",
            code: "print(sum(1 for x in range(10) if x % 2 == 0))",
            answer: "5"
        },
        {
            lang: "python",
            code: "print('Hello'.rjust(10, '*'))",
            answer: "*****Hello"
        },
        {
            lang: "python",
            code: "print(all(x > 0 for x in [1, 2, -3]))",
            answer: "False"
        },
        {
            lang: "python",
            code: "print('{:.2f}'.format(3.141592))",
            answer: "3.14"
        },
        {
            lang: "python",
            code: "print(bin(42)[2:])",
            answer: "101010"
        },
        {
            lang: "python",
            code: "print('Hello {1} {0}'.format('World', 'Python'))",
            answer: "Hello Python World"
        },
        {
            lang: "python",
            code: "print(sorted('Hello', key=str.lower))",
            answer: "['e', 'H', 'l', 'l', 'o']"
        },
        {
            lang: "python",
            code: "print(3 + 4)",
            answer: "7"
        },
        {
            lang: "python",
            code: "print('Hello' * 2)",
            answer: "HelloHello"
        },
        {
            lang: "python",
            code: "print(len('Python'))",
            answer: "6"
        },
        {
            lang: "python",
            code: "print(10 > 5)",
            answer: "True"
        },
        {
            lang: "python",
            code: "print('Hello' + ' ' + 'World')",
            answer: "Hello World"
        },
        {
            lang: "python",
            code: "print('Python'[2])",
            answer: "t"
        },
        {
            lang: "python",
            code: "print(8 // 3)",
            answer: "2"
        },
        {
            lang: "python",
            code: "print('Hello'.upper())",
            answer: "HELLO"
        },
        {
            lang: "python",
            code: "print(min(5, 10))",
            answer: "5"
        },
        {
            lang: "python",
            code: "print('Python' in 'Hello, Python')",
            answer: "True"
        },
        {
            lang: "python",
            code: "print(sum(x**3 for x in range(1, 6)))",
            answer: "225"
        },
        {
            lang: "python",
            code: "print(''.join(chr(ord(c) + 1) for c in 'Python'))",
            answer: "Qzuipo"
        },
        {
            lang: "python",
            code: "print(list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5, 6])))",
            answer: "[2, 4, 6]"
        },
        {
            lang: "python",
            code: "print(max([sum(map(int, str(abs(x)))) for x in [-123, 456, -789]]))",
            answer: "24"
        },
        {
            lang: "python",
            code: "print(eval('2 * 3 + 4'))",
            answer: "10"
        },
        {
            lang: "python",
            code: "print(sorted('Hello World', key=str.lower))",
            answer: "[' ', 'd', 'e', 'H', 'l', 'l', 'o', 'o', 'r', 'W']"
        },
        {
            lang: "python",
            code: "print(any(x == 0 for x in [1, 2, 3]))",
            answer: "False"
        },
        {
            lang: "python",
            code: "print('{0:.2f}'.format(sum([1.2345, 6.7891])))",
            answer: "8.02"
        },
        {
            lang: "python",
            code: "print(list(zip(['a', 'b', 'c'], [1, 2, 3])))",
            answer: "[('a', 1), ('b', 2), ('c', 3)]"
        },
        {
            lang: "python",
            code: "print(set('Hello') & set('World'))",
            answer: "{'l', 'o'}"
        },
        {
            lang: "python",
            code: `def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))`,
            answer: "120"
        },
        {
            lang: "python",
            code: `numbers = [1, 2, 3, 4, 5]
squared_numbers = [x**2 for x in numbers]
print(squared_numbers)`,
            answer: "[1, 4, 9, 16, 25]"
        },
        {
            lang: "python",
            code: `def is_palindrome(s):
    s = ''.join(c for c in s.lower() if c.isalnum())
    return s == s[::-1]

print(is_palindrome('A man, a plan, a canal: Panama'))`,
            answer: "True"
        },
        {
            lang: "python",
            code: `import re

text = "Hello, World! This is a sample text."
pattern = r'[^a-zA-Z\\s]'
clean_text = re.sub(pattern, '', text)
print(clean_text)`,
            answer: "Hello World This is a sample text"
        },
        {
            lang: "python",
            code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I'm {self.age} years old.")

p = Person("Alice", 25)
p.greet()`,
            answer: "Hello, my name is Alice and I'm 25 years old."
        }
    ]
}

export default pythonQuestions;