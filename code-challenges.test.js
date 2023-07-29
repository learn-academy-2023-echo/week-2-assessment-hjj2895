// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

//input: object
//output: string that states if a number inside is evenly divisible by three or not
describe("divisibleByThree", () => {
    it("returns a number is divisible by three or not", () => {
        const object1 = { number: 15 }
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        const object2 = { number: 0 }
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        const object3 = { number: -7 }
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})
// ReferenceError: divisibleByThree is not defined

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function that takes an object as a parameter
// Use a conditional statement to check if number in the object is divisible by three using dot notation
    // Return a string of number is divisible by three if it meets the condition
// Otherwise
    // Return a string of number is not divisible by three

const divisibleByThree = (object) => {
    if (object.number % 3 === 0){
        return `${object.number} is divisible by three`
    }else{
        return `${object.number} is not divisible by three`
    }
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// input: array of words
// output: array of all words with first letter capitalized
describe("capitalize", () => {
    it("returns an array of all words with first letter capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// ReferenceError: capitalize is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function with an array as parameter
// Iterate through each element inside the array using map method
// Through each iteration, grab the first letter of the word and capitalize it using .toUpperCase()
// Add rest of the characters in lowercase by using substr() method

const capitalize = (arr) => {
    return arr.map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// input: string
// output: index of first vowel
describe("firstVowel", () => {
    it("returns the index of the first vowel", () => {
        const vowelTester1 = "learn"
        expect(firstVowel(vowelTester1)).toEqual(1)
        const vowelTester2 = "academy"
        expect(firstVowel(vowelTester2)).toEqual(0)
        const vowelTester3 = "challenges"
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})
// ReferenceError: firstVowel is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function with a string as a parameter
// Create a variable and assign it to a string of vowels
// Loop through the string
// If the character is included in the vowels
    //return the index

const firstVowel = (str) => {
    let vowels = "aeiouAEIOU"
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            return i
        }
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total