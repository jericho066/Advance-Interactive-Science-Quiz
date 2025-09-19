//* Computer Science Questions

const computerScienceQuestions = [
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Program Unit", correct: false },
      { text: "Computer Processing Unit", correct: false },
    ],
  },
  {
    question: "Which programming language is known for its use in web development and has a coffee-related name?",
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: true },
      { text: "C++", correct: false },
      { text: "Ruby", correct: false },
    ],
  },
  {
    question: "What does RAM stand for?",
    answers: [
      { text: "Run Access Memory", correct: false },
      { text: "Read Access Memory", correct: false },
      { text: "Random Access Memory", correct: true },
      { text: "Rapid Access Memory", correct: false },
    ],
  },
  {
    question: "Which data structure follows the Last In, First Out (LIFO) principle?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Array", correct: false },
      { text: "Tree", correct: false },
      { text: "Stack", correct: true },
    ],
  },
  {
    question: "What is the binary representation of the decimal number 8?",
    answers: [
      { text: "1000", correct: true },
      { text: "1010", correct: false },
      { text: "1100", correct: false },
      { text: "0111", correct: false },
    ],
  },
  {
    question: "Which company developed the Java programming language?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Sun Microsystems", correct: true },
      { text: "Apple", correct: false },
      { text: "IBM", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "High Tech Modern Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "Hyperlink and Text Markup Language", correct: false },
    ],
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    answers: [
      { text: "Bubble Sort", correct: false },
      { text: "Selection Sort", correct: false },
      { text: "Insertion Sort", correct: false },
      { text: "Quick Sort", correct: true },
    ],
  },
  {
    question: "What is the maximum number that can be represented with 8 bits?",
    answers: [
      { text: "255", correct: true },
      { text: "256", correct: false },
      { text: "127", correct: false },
      { text: "128", correct: false },
    ],
  },
  {
    question: "Which protocol is used for transferring web pages?",
    answers: [
      { text: "FTP", correct: false },
      { text: "HTTP", correct: true },
      { text: "SMTP", correct: false },
      { text: "TCP", correct: false },
    ],
  },
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(n²)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(1)", correct: false },
    ],
  },
  {
    question: "Which database language is used to query relational databases?",
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: false },
      { text: "C++", correct: false },
      { text: "SQL", correct: true },
    ],
  },
  {
    question: "What does API stand for?",
    answers: [
      { text: "Application Programming Interface", correct: true },
      { text: "Advanced Programming Interface", correct: false },
      { text: "Application Process Interface", correct: false },
      { text: "Automated Programming Interface", correct: false },
    ],
  },
  {
    question: "Which data structure is used for breadth-first search?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Hash Table", correct: false },
    ],
  },
  {
    question: "What is the result of 10 % 3 in most programming languages?",
    answers: [
      { text: "3", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "10", correct: false },
    ],
  },
  {
    question: "Which programming paradigm does Python primarily support?",
    answers: [
      { text: "Only procedural", correct: false },
      { text: "Only functional", correct: false },
      { text: "Only object-oriented", correct: false },
      { text: "Multi-paradigm", correct: true },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
    ],
  },
  {
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    answers: [
      { text: "Bubble Sort", correct: false },
      { text: "Dijkstra's Algorithm", correct: true },
      { text: "Linear Search", correct: false },
      { text: "Merge Sort", correct: false },
    ],
  },
  {
    question: "What is the base of the hexadecimal number system?",
    answers: [
      { text: "8", correct: false },
      { text: "10", correct: false },
      { text: "16", correct: true },
      { text: "2", correct: false },
    ],
  },
  {
    question: "Which company created the C programming language?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Apple", correct: false },
      { text: "Google", correct: false },
      { text: "Bell Labs", correct: true },
    ],
  },
  {
    question: "What is polymorphism in object-oriented programming?",
    answers: [
      { text: "Having multiple constructors", correct: false },
      { text: "Using the same interface for different data types", correct: true },
      { text: "Creating multiple objects", correct: false },
      { text: "Inheriting from multiple classes", correct: false },
    ],
  },
  {
    question: "Which port number is commonly used for HTTP traffic?",
    answers: [
      { text: "21", correct: false },
      { text: "25", correct: false },
      { text: "80", correct: true },
      { text: "443", correct: false },
    ],
  },
  {
    question: "What is the worst-case time complexity of bubble sort?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: false },
      { text: "O(n²)", correct: true },
      { text: "O(log n)", correct: false },
    ],
  },
  {
    question: "Which data type is used to store true/false values?",
    answers: [
      { text: "Integer", correct: false },
      { text: "String", correct: false },
      { text: "Float", correct: false },
      { text: "Boolean", correct: true },
    ],
  },
  {
    question: "What does GUI stand for?",
    answers: [
      { text: "Graphical User Interface", correct: true },
      { text: "General User Interface", correct: false },
      { text: "Global User Interface", correct: false },
      { text: "Generic User Interface", correct: false },
    ],
  },
  {
    question: "Which programming language is commonly used for machine learning?",
    answers: [
      { text: "COBOL", correct: false },
      { text: "Python", correct: true },
      { text: "Assembly", correct: false },
      { text: "Pascal", correct: false },
    ],
  },
  {
    question: "What is the purpose of a compiler?",
    answers: [
      { text: "To execute programs", correct: false },
      { text: "To debug programs", correct: false },
      { text: "To translate source code to machine code", correct: true },
      { text: "To design user interfaces", correct: false },
    ],
  },
  {
    question: "Which network topology connects all devices to a central hub?",
    answers: [
      { text: "Ring", correct: false },
      { text: "Mesh", correct: false },
      { text: "Bus", correct: false },
      { text: "Star", correct: true },
    ],
  },
  {
    question: "What is the decimal value of the binary number 1101?",
    answers: [
      { text: "13", correct: true },
      { text: "11", correct: false },
      { text: "15", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Which HTTP method is used to retrieve data from a server?",
    answers: [
      { text: "POST", correct: false },
      { text: "GET", correct: true },
      { text: "PUT", correct: false },
      { text: "DELETE", correct: false },
    ],
  },
  {
    question: "What does OOP stand for in programming?",
    answers: [
      { text: "Object-Orientation Programming", correct: false },
      { text: "Operational-Online Programming", correct: false },
      { text: "Object-Oriented Programming", correct: true },
      { text: "Open-Online Programming", correct: false },
    ],
  },
  {
    question: "Which layer of the OSI model handles routing?",
    answers: [
      { text: "Physical", correct: false },
      { text: "Data Link", correct: false },
      { text: "Network", correct: true },
      { text: "Transport", correct: false },
    ],
  },
  {
    question: "What is the purpose of version control systems like Git?",
    answers: [
      { text: "To compile code", correct: false },
      { text: "To track changes in code over time", correct: true },
      { text: "To execute programs", correct: false },
      { text: "To design databases", correct: false },
    ],
  },
  {
    question: "Which algorithm technique breaks problems into smaller subproblems?",
    answers: [
      { text: "Greedy algorithm", correct: false },
      { text: "Brute force", correct: false },
      { text: "Dynamic programming", correct: false },
      { text: "Divide and conquer", correct: true },
    ],
  },
  {
    question: "What is the standard port for HTTPS?",
    answers: [
      { text: "80", correct: false },
      { text: "21", correct: false },
      { text: "443", correct: true },
      { text: "25", correct: false },
    ],
  },
  {
    question: "Which data structure allows insertion and deletion at both ends?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: false },
      { text: "Deque", correct: true },
      { text: "Array", correct: false },
    ],
  },
  {
    question: "What is the time complexity of accessing an element in an array by index?",
    answers: [
      { text: "O(1)", correct: true },
      { text: "O(log n)", correct: false },
      { text: "O(n)", correct: false },
      { text: "O(n²)", correct: false },
    ],
  },
  {
    question: "Which programming language is primarily used for iOS app development?",
    answers: [
      { text: "Java", correct: false },
      { text: "Kotlin", correct: false },
      { text: "Swift", correct: true },
      { text: "C#", correct: false },
    ],
  },
  {
    question: "What does DNS stand for?",
    answers: [
      { text: "Dynamic Name System", correct: false },
      { text: "Domain Name System", correct: true },
      { text: "Digital Network Service", correct: false },
      { text: "Distributed Name Service", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a function in Python?",
    answers: [
      { text: "function", correct: false },
      { text: "func", correct: false },
      { text: "method", correct: false },
      { text: "def", correct: true },
    ],
  },
  {
    question: "What is the maximum value for an unsigned 16-bit integer?",
    answers: [
      { text: "32767", correct: false },
      { text: "65535", correct: true },
      { text: "65536", correct: false },
      { text: "32768", correct: false },
    ],
  },
  {
    question: "Which design pattern ensures only one instance of a class exists?",
    answers: [
      { text: "Factory", correct: false },
      { text: "Observer", correct: false },
      { text: "Singleton", correct: true },
      { text: "Decorator", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of an operating system?",
    answers: [
      { text: "To run applications", correct: false },
      { text: "To provide internet access", correct: false },
      { text: "To create documents", correct: false },
      { text: "To manage computer resources", correct: true },
    ],
  },
  {
    question: "Which protocol is used for sending emails?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: true },
      { text: "TCP", correct: false },
    ],
  },
  {
    question: "What is recursion in programming?",
    answers: [
      { text: "Using loops repeatedly", correct: false },
      { text: "A function calling itself", correct: true },
      { text: "Repeating code blocks", correct: false },
      { text: "Creating multiple functions", correct: false },
    ],
  },
  {
    question: "Which component stores data permanently in a computer?",
    answers: [
      { text: "RAM", correct: false },
      { text: "Cache", correct: false },
      { text: "Register", correct: false },
      { text: "Hard drive", correct: true },
    ],
  },
  {
    question: "What does the term 'Big O' notation describe?",
    answers: [
      { text: "Memory usage", correct: false },
      { text: "Code readability", correct: false },
      { text: "Algorithm efficiency", correct: true },
      { text: "Program size", correct: false },
    ],
  },
  {
    question: "Which JavaScript framework is maintained by Facebook?",
    answers: [
      { text: "Angular", correct: false },
      { text: "Vue.js", correct: false },
      { text: "jQuery", correct: false },
      { text: "React", correct: true },
    ],
  },
  {
    question: "What is the purpose of encapsulation in OOP?",
    answers: [
      { text: "To hide implementation details", correct: true },
      { text: "To create multiple objects", correct: false },
      { text: "To inherit properties", correct: false },
      { text: "To override methods", correct: false },
    ],
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    answers: [
      { text: "Array", correct: false },
      { text: "Linked List", correct: false },
      { text: "Stack", correct: false },
      { text: "Heap", correct: true },
    ],
  },
  {
  question: "Which programming language popularized object-oriented programming with its early development in the 1970s?",
  answers: [
    { text: "Smalltalk", correct: true },
    { text: "C", correct: false },
    { text: "Fortran", correct: false },
    { text: "Lisp", correct: false }
  ]
},
{
  question: "Which language is widely used for system programming and gives fine-grained control over memory?",
  answers: [
    { text: "C", correct: true },
    { text: "Python", correct: false },
    { text: "Ruby", correct: false },
    { text: "PHP", correct: false }
  ]
},
{
  question: "Which language is the modern, officially preferred language for Android app development alongside Java?",
  answers: [
    { text: "Kotlin", correct: true },
    { text: "Swift", correct: false },
    { text: "Dart", correct: false },
    { text: "C#", correct: false }
  ]
},
{
  question: "Which language uses significant indentation (whitespace) to define code blocks instead of braces?",
  answers: [
    { text: "Python", correct: true },
    { text: "Java", correct: false },
    { text: "C++", correct: false },
    { text: "Go", correct: false }
  ]
},
{
  question: "Which language is a statically typed superset of JavaScript that transpiles to plain JavaScript?",
  answers: [
    { text: "TypeScript", correct: true },
    { text: "CoffeeScript", correct: false },
    { text: "Dart", correct: false },
    { text: "Elm", correct: false }
  ]
},
{
  question: "Which purely functional language is known for lazy evaluation and strong static typing?",
  answers: [
    { text: "Haskell", correct: true },
    { text: "Scala", correct: false },
    { text: "OCaml", correct: false },
    { text: "F#", correct: false }
  ]
},
{
  question: "Which language is most commonly associated with statistical computing and data analysis?",
  answers: [
    { text: "R", correct: true },
    { text: "MATLAB", correct: false },
    { text: "Julia", correct: false },
    { text: "SAS", correct: false }
  ]
},
{
  question: "In runtime terminology, what does JIT stand for?",
  answers: [
    { text: "Just-In-Time (compilation)", correct: true },
    { text: "Java Integrated Translator", correct: false },
    { text: "Jump-Into-Thread", correct: false },
    { text: "Joint-Instruction-Translator", correct: false }
  ]
},
{
  question: "Which language enforces single class inheritance but supports multiple interface implementations for polymorphism?",
  answers: [
    { text: "Java", correct: true },
    { text: "C++", correct: false },
    { text: "Python", correct: false },
    { text: "Ruby", correct: false }
  ]
},
{
  question: "Which language introduced goroutines as lightweight concurrent functions that simplify concurrency?",
  answers: [
    { text: "Go", correct: true },
    { text: "Erlang", correct: false },
    { text: "Rust", correct: false },
    { text: "Scala", correct: false }
  ]
}
];