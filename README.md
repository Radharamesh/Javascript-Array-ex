# Functional
This exercise is about using functional programming concepts in JavaScript. Common concepts in functional programming is
 that everything is stateless (no changes in variables) and consists of functions. Latest addition to Javascript was ES6
 which supports functional programming in JavaScript. In this exercise we will explore some of these concepts.

#### Recommended reading
- [JSON](https://www.json.org/json-en.html)
- [Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [An Absolute Beginner's Guide to Using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

#### Concepts
- Higher order functions
- Callback functions
- Arrow/Lambda functions
- Map, Reduce and Filter functions
- Javascript Object Notation (JSON)

## Goals
1. Introduction to functional programming:​ After doing this exercise we should be comfortable in using certain
functional programming concepts.
2. Introduction to ES6 Javascript:​ After doing this exercise we should be familiar with how to work with the latest 
standard of Javascript.
3. Introduction to an npm project: After this exercise we should be comfortable with setting up a basic npm based project-

## Specifications
When using the functional approach in Java we convert a data structure (list/array) to a stream to be able to perform 
functions on the elements.

```java
// list.stream() returns a stream based on the original list. A stream can be seen as a flow of data to be extracted
// or processed. 
List<Integer> doubledList = list.stream().map((n) -> n * 2).collect(Collectors.toList());
```

In Javascript we do not have to convert a list/array to a stream but instead apply functions directly onto elements:
```javascript
const doubledArray = array.map((n) => n * 2);
```

Before we apply functions to list elements we have to recap the idea of higher functions. These types of functions take functions as parameters. Furthermore, they can also return functions. 
So what are the functions called that are passed as arguments? They are usually called c​allback functions. A common pattern is to store the function in a variable and then pass it to another function.
Additionally, if the callback function is short we can create lambda/arrow functions. These types of functions are usually not assigned to a variable but they can be.
Common higher order functions are `map`, `reduce` and `filter`. Each of these three takes a function as an argument and the expected input/output of that callback function 
is different for each one. See section [recommended reading](#recommended-reading) for more details.

### What to do?
This assignment is about working with data using these functional programming concepts (You are of course allowed to 
use traditional for/while loops but most exercises should be solved using functional programming). You will read in a JSON file and
calculate some values from the data. The JSON file consists of different person objects that have a name and a year.
Each exercise requires that the JSON file is read and that the result is written to a new JSON file. There are a couple of ways 
to read in JSON but for this assignment `require` is good enough.
 
 #### Setup
 JavaScript uses npm for managing a project and its dependencies, this is similar to gradle/maven for Java.
 Start by initializing a project (see [recommended reading](#recommended-reading)) via `npm` and install the following packages:
 - [eslint](https://eslint.org/): JavaScript linter which checks your coding style.
 - [jest](https://jestjs.io/): Testing framework, similar to JUnit but for JavaScript.
 
 ESLint should be set up to use the AirBnB style guide. It has a pretty strict rules to be enforced but you can always
 change them in `.eslintrc.js`.
 
#### Exercise 1–11
> **Assistant's Note:** If you would like to do this in a TDD (Test driven development)
> manner, then start with the tests first! It is actually recommended by many!

Using the data from `MOCK_DATA.json`, do the following 
1. Count the number of females
2. Find all people that are older than 35.
3. The total age of all people summed.

4. Average age of all people.
5. Calculate the percentage of people who are older than 50.
6. Calculate the average age of everyone who is younger than 64. 

7. Find the largest age gap between two consecutive people.
8. Count the number of males that are younger than 43 but older than 22.
9. Count the number of people who starts their first name with the letter L. 

10. Count the average age of everyone who is between the ages of 35 and 80 and their last name starts with the letter D. 
11. Increment the age with 1 year for everyone that has a first name that starts with letter K and last name that ends with letter s. 


#### Exercise 12
Write tests for at least 6 of the previous exercises using jest. Tests look a bit different in jest but they are quite easy,
here is how a sample jest test could look like (assuming your main file is `submission.js`:
```javascript
// submission.js
function femalesCount(listOfPeople) {
    ...
    return count;
}

module.exports = femalesCount; // This is needed so that we can import it in another file
```
```javascript
// submission.test.js
const femalesCount = require('../src/solution'); // Use the path to your submission file

test('femalesCount should count correct number of females', () => {
  expect(femalesCount([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 9, first_name: 'Amanda', last_name: 'Gownge', email: 'agownge8@t.co', gender: 'Female', ip_address: '246.160.41.135', age: 95,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
    },
  ])).toBe(3);
});

```
> **Assistant's Note: **
> The test above uses a list as an input and not an entire file. This is due to it being easier to get an overview of
> the test's actual input. This does however mean that the functionality must be divided into functions of higher cohesion
> .i.e one function reading the file and one function taking in the list and calculating the desired result.

###
