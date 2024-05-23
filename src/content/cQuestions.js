var cQuestions = {
    data: [
        {
            lang: "c",
            code: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello, World!";
    printf("%s\\n", strrev(str));
    return 0;
}`,
            answer: "!dlroW ,olleH"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int num = 42;
    printf("%d\\n", abs(num));
    return 0;
}`,
            answer: "42"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
#include <ctype.h>

int main() {
    char c = 'a';
    printf("%c\\n", toupper(c));
    return 0;
}`,
            answer: "A"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
#include <math.h>

int main() {
    double x = 3.14;
    printf("%.2f\\n", ceil(x));
    return 0;
}`,
            answer: "4.00"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "Hello";
    char str2[] = "World";
    char result[20];
    strcpy(result, strcat(str1, str2));
    printf("%s\\n", result);
    return 0;
}`,
            answer: "HelloWorld"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int num = 10;
    int *ptr = &num;
    printf("%d\\n", *ptr);
    return 0;
}`,
            answer: "10"
        },
        {
            lang: "c",
            code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
            answer: "Hello, World!"
        },
        {
            lang: "c",
            code: `#include <stdio.h>

int main() {
    int x = 5;
    int y = 3;
    printf("%d\\n", x + y);
    return 0;
}`,
            answer: "8"
        },
        {
            lang: "c",
            code: `#include <stdio.h>

int main() {
    int x = 10;
    printf("%d\\n", x * 2);
    return 0;
}`,
            answer: "20"
        },
        {
            lang: "c",
            code: `#include <stdio.h>

int main() {
    int x = 15;
    int y = 3;
    printf("%d\\n", x / y);
    return 0;
}`,
            answer: "5"
        },
        {
            lang: "c",
            code: `#include <stdio.h>

int main() {
    int x = 10;
    int y = 20;
    printf("%d\\n", x > y);
    return 0;
}`,
            answer: "0"
        },
        {
            lang: "c",
            code: `#include <stdio.h>

int main() {
    char c = 'A';
    printf("%c\\n", c + 1);
    return 0;
}`,
            answer: "B"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "Hello";
    char str2[] = "World";
    char str3[20];
    strcpy(str3, strrev(strcat(str1, str2)));
    printf("%s\\n", str3);
    return 0;
}`,
            answer: "dlroWolleH"
        },
        {
            lang: "c",
            code: `#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return *(int*)a - *(int*)b;
}

int main() {
    int arr[] = {5, 2, 8, 1, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    qsort(arr, n, sizeof(int), compare);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}`,
            answer: "1 2 5 8 9 "
        },
        {
            lang: "c",
            code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    struct Node* head = NULL;
    struct Node* second = NULL;
    struct Node* third = NULL;

    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));

    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = NULL;

    struct Node* current = head;
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\\n");

    return 0;
}`,
            answer: "1 2 3 "
        },
        {
            lang: "c",
            code: `#include <stdio.h>
#include <stdlib.h>

int fib(int n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}

int main() {
    int n = 10;
    printf("%d\\n", fib(n));
    return 0;
}`,
            answer: "55"
        }
    ]
}   

export default cQuestions;