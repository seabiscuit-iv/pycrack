var javaQuestions = {
    data: [
        {
            lang: "java",
            code: `int num = 42;
System.out.println(Integer.toBinaryString(num));`,
            answer: "101010"
        },
        {
            lang: "java",
            code: `String str = "Hello, World!";
System.out.println(str.replaceAll("l", "L"));`,
            answer: "HeLLo, WorLd!"
        },
        {
            lang: "java",
            code: `int[] arr = {1, 2, 3, 4, 5};
System.out.println(Arrays.stream(arr).map(x -> x * x).sum());`,
            answer: "55"
        },
        {
            lang: "java",
            code: `String str1 = "Hello";
String str2 = "World";
System.out.println(String.join(" ", str1, str2));`,
            answer: "Hello World"
        },
        {
            lang: "java",
            code: `List<String> list = Arrays.asList("apple", "banana", "cherry");
list.forEach(System.out::print);`,
            answer: "applebananacherry"
        },
        {
            lang: "java",
            code: `int num = 123;
System.out.println(Integer.sum(1, num));`,
            answer: "124"
        },
        {
            lang: "java",
            code: `System.out.println("Hello, World!");`,
            answer: "Hello, World!"
        },
        {
            lang: "java",
            code: `int x = 5;
int y = 3;
System.out.println(x + y);`,
            answer: "8"
        },
        {
            lang: "java",
            code: `int x = 10;
System.out.println(x * 2);`,
            answer: "20"
        },
        {
            lang: "java",
            code: `int x = 15;
int y = 3;
System.out.println(x / y);`,
            answer: "5"
        },
        {
            lang: "java",
            code: `boolean x = true;
boolean y = false;
System.out.println(x && y);`,
            answer: "false"
        },
        {
            lang: "java",
            code: `String str = "Hello";
System.out.println(str.length());`,
            answer: "5"
        },
        {
            lang: "java",
            code: `List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
int sum = list.stream()
             .filter(x -> x % 2 == 0)
             .mapToInt(Integer::intValue)
             .sum();
System.out.println(sum);`,
            answer: "6"
        },
        {
            lang: "java",
            code: `String str = "Hello, World!";
String reversed = new StringBuilder(str).reverse().toString();
System.out.println(reversed);`,
            answer: "!dlroW ,olleH"
        },
        {
            lang: "java",
            code: `int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr, Collections.reverseOrder());
System.out.println(Arrays.toString(arr));`,
            answer: "[1, 2, 5, 8, 9]"
        },
        {
            lang: "java",
            code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 1);
map.put("banana", 2);
map.put("cherry", 3);
map.forEach((k, v) -> System.out.print(k + ": " + v + ", "));`,
            answer: "apple: 1, banana: 2, cherry: 3, "
        },
        {
            lang: "java",
            code: `int num = 5;
int factorial = IntStream.rangeClosed(1, num)
                         .reduce(1, (a, b) -> a * b);
System.out.println(factorial);`,
            answer: "120"
        }
    ]
}

export default javaQuestions;