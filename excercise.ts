// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string
interface Country {
  name: string;
  capital: string;
  population: number;
  languages: string;
}
// Step Two: Declare an object "country" with properties following "Country" interface

//const country: Country = {
// name: "Bulgaria",
//capital: "Sofia",
// population: 690000,
// languages: "bulgarian",
//};
//console.log(country);

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

function displayCountryDetails(country: Country) {
  console.log(country.population);
}

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number

interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"

const student: Student = {
  id: 50,
  name: "Ivan",
  age: 25,
  grade: 125,
};
console.log(student);

// Step Three: Declare array "students" with objects of type "Student"

let students: Student[] = [
  student,
  { id: 1, name: "Ivan", age: 25, grade: 125 },
];

console.log("students", students);

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}

const studentNames = getStudents(students);
console.log(studentNames);

//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending
