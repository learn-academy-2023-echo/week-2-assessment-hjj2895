// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2023"
// console.log(cohort.split(""))

// a) Your answer: ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '3']
// b) Verify and explain: My initial answer was correct because the split method is a built in method used on a string which converts the string into an array. The "" inside the parenthesis is known as the separator which separates the string by each character. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The answer will be undefined because there is no return statement inside the function and we need a return statement in order to invoke the function. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: My initial answer was correct because .map method is a higher order function built in method that is used on an array and returns an array with the same length. The .map method will iterate through the whole array and will take a value as a parameter which is the number in this case. Then, it will multiply the number by 2 through each iteration and will return an array with the original numbers multiplied by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: My initial answer was correct because .filter method will iterate through the whole array and will return a new array based on the condition. The number will be the parameter and followed up with a conditional statement. The condition is that if the number is not evenly divisible by 2, then return an array with odd numbers.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: The answer was "JavaScript" because inside the console log, we are using a dot notation to access the property inside the object. Since we are trying to access the languages property, myCodingSkills.languages will evaluate to the array. Since we are also trying to access the 0 index of the array, the value will evaluate to the first element which is "JavaScript". 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Learn {student: "George", cohort: "Echo", year: 2023}
// b) Verify and explain: The answer matched the output because when we create a class, we also need to create the instance of a class which is essentially an object by using the new keyword. In line 64, we assigned the instance of the class to the variable learnStudent. When we create the instance, we also need the constructor method which creates and initializes an object. Inside the constructor method, we are passing name as the parameter and "George" as the argument. We are also using this keyword as a reference to the object that it belongs to. Inside the constructor method, we are assigning the properties to a value which this.student has a value of "George", this.cohort has a value of "Echo" and this.year has a value of 2023. When we console log learnStudent, we will get an object named Learn along with its properties and values. 
