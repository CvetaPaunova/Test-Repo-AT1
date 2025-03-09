//let vs const
let number: number = 5;
console.log("number", number);

const message: string = "Welcome";

//string
let welcomeMessage: string = "Hello, Peter!";
let test: string = "Ivan";

let welcomeMessageLength: number = welcomeMessage.length;
console.log("welcomeMessageLength", welcomeMessageLength);

//string interpolation
let welcomeMessageDetails: string =
  "My welcome message length is ${WelcomeMessageLength}";
let userWelcomeMessage: string = "Welcome, ${test}";
console.log(welcomeMessageDetails);
//Number
let fisrtNumber: number = 5;
let secondNumber: number = 10;

let result: number = fisrtNumber - secondNumber;
console.log("result", result);

//Number math operations
let add: number = secondNumber + fisrtNumber;
let subtract: number = secondNumber - fisrtNumber;
let multiply: number = secondNumber / fisrtNumber;
let divide: number = secondNumber / fisrtNumber;

//Boolean (true/false)

let isTrue: boolean = true;
let isGreater: boolean = fisrtNumber > secondNumber;
console.log("isGreater", isGreater);
let isLower: boolean = fisrtNumber < secondNumber;
let isEqual: boolean = fisrtNumber === secondNumber;
let isGreaterOrEqual: boolean = fisrtNumber >= secondNumber;
let isLowerOrEqual: boolean = fisrtNumber <= secondNumber;
let areNumberEqualTo: boolean = 5 === fisrtNumber && 10 === secondNumber;
let isAnyNumberEqualTo: boolean = 6 === fisrtNumber || 11 === secondNumber;

// Any
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

console.log("stringValue", stringValue);
//Homework ts
//Exercise 1 - even or odd
let num: number = 7;
let isEven: boolean = num % 2 === 0;
console.log(`The number ${num} is ${isEven ? "even" : "odd"}.`);

//Exercise 2
let text: string = "Hello, TypeScript!";
let isLong: boolean = text.length > 10;
console.log(
  `The text "${text}" ${
    isLong ? "has more" : "has 10 or fewer"
  } than 10 characters.`
);

//Exercise 3 mi dava error
//let number: number = 5;
let isPositive: boolean = number > 0;
console.log(
  `The number ${number} is ${isPositive ? "positive" : "not positive"}.`
);

//Exercise 4 negative or zero?
let numCheck: number = 5;
let isNonPositive: boolean = numCheck <= 0;
console.log(
  `The number ${numCheck} is ${
    isNonPositive ? "negative or zero" : "positive"
  }.`
);

//Exercise 5

let isEmpty: boolean = message === "Homework";
console.log(`The message is ${isEmpty ? "empty" : "not empty"}.`);

//Exercise 6
let rangeNumber: number = 25;
let isInRange: boolean = rangeNumber >= 10 && rangeNumber <= 100;
console.log(
  `The number ${rangeNumber} is ${
    isInRange ? "within" : "out of"
  } the range 10 to 100.`
);

//Lesson 5

const isPositiveNum: string =
  5 > 0 ? "The number is positive" : "The number is negative";

//Ternary operator
const age: number = 30;
const myName: string = "Ivan";
const personDescription =
  age < 40
    ? "$ {my name} is younger than 40. He is ${age} years old. "
    : "$ {my name} is older than 40. He is ${age} years old. ";

console.log("personDescription", personDescription);

const personName = 'His name is "${My name}".';

// If else statements

if (age < 40) {
  console.log("Age are lower than 40");
} else {
  ("Age are greater than 40");
}

//Type Alias
type PersonInfoType = string | number;

const personNameInf: PersonInfoType = "Ivan";
const personAgeInf: PersonInfoType = 25;
