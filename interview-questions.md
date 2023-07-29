# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: The difference between a parameter and an argument is that the parameter is a variable that is passed in a function whereas the argument is the actual value that is being passed when we invoke our function. 

Researched answer: Parameter is the variable that is being passed in a function. Argument is the data that is passed after invoking our function. When we create a function, a variable or multiple variables can be passed as a parameter. When we call our function to get an output, we can pass in the actual values as our arguments that matches with the parameters.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The parameters are value, index, and array. Value is the required parameter and the optional parameters are index and array.

Researched answer: When using the .map() method, we must pass in a value that represents the current element as a parameter when iterating through the array. 
Index and array are optional and may need to be used when we need to access the current index or the array. 

3. What is the difference between map and filter?

Your answer: map method will iterate through the array and return a new array with new values and length of the new array will be the same as the initial array. The filter method will iterate through the array and filter out values based on a conditional statement. It will return a new array with values that meet the condition.

Researched answer: The map method iterates through an array and creates a new array with updated values from calling a function for every element. The map method will also return a new array of the same length. The filter method will create a new array with elements that meet the condition when calling a function for every element. The filter method will remove elements that do not satisfy the condition. 

1. What is iteration?

Your answer: Iteration is the process of performing an action for each element.

Researched answer: Iteration is the process in which a code is executed once for each element in an array or properties of an object. An action can be performed on an element a certain number of times or until a condition is met which is also known as a loop. 

1. What is the difference between a function and a method?

Your answer: The difference between a function and a method is that a method is a property of an object that holds a function as a value. A function is not associated with an object.

Researched answer: A method is a property of an object or class that holds a function as its value. A function is a reusable piece of code that performs a certain task and is not associated with an object or class. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting is the process which a variable and a function can be used before they are declared. 

Researched answer: Hoisting is a concept that describes the behavior of moving variable and function declarations at the top of the scope before code is executed. There are two types of hoisting which include variable hoisting and function hoisting. In variable hoisting, the keyword 'var' is hoisted however, 'let' and 'const' will not show the same behavior although they are hoisted. When the 'var' keyword is used, the variable will be hoisted to the global scope which allows for the variable to accessed before being declared. However,when using the 'let' and 'const' keywords, the variable cannot be accessed before it is declared. In function hoisting, a function that is declared will be hoisted to the top of the scope. This allows for the function to be called before the declaration. However, a function expression will cause an error since only declarations are hoisted.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: is a type of function that combine HTML and JavaScript logic and is resuable.

2. Spread operator: is a syntax which allows the elements of an iterable object such as an array to be unpacked into a list. It can be used to copy an array or merge multiple arrays into one array. 

3. React state: is an object that contains data and information that belong to the component. 

4. React props: arguments that are passed into components. 

5. DOM events: respond to a running code when the user does something on a browser such as clicking, scrolling or printing. 
