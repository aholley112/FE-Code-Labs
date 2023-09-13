// Accessing Objects the Old Way

let person = {
    firstName: 'Sonny',
    lastName: 'Sangha'
};

let personFirstName = person.firstName;
let personLastName = person.lastName;

personFirstName
personLastName

// Access Objects the New Way

let { firstName, lastName } = person;

firstName
lastName

//We can also RENAME the variables with the New way

let { firstName: fName, lastName: lName } = person;

fName
lName


// What happens if you destruct a property that does not exist

let { firstName, lastName, } = person;
console.log(middleName); //undefined

//Setting defaults when object destructuring

let person = {
    firstName: 'Sonny',
    lastName: 'Sangha',
    current Age: 28

};

let { firstName, lastName, middleName = '', currentAge: age = 20 } = person;

console.log(middle); //''
console.log(age); //28 because the initial object already had an age and it does not need to default to what's in the string.

//Another example of how it defaults

let person = {
    firstName: 'Sonny',
    lastName: 'Sangha',
    middleName: 'Singh',

};

let { firstName, lastName, middleName = '', currentAge: age = 20 } = person;

console.log(middleName); //'Singh'
console.log(age); // 28

//Arrays
//Old way of Array
const arr = [1, 2, 3]; 

//Prior to ES6, when you want to assign the elements of the array to variables, you typically do it like this:

let x = arr[0];
let y = arr[1];
let z = arr[2]

x
y
z

//New Way
// For objects we use curly brackets and for arrays we use square brackets.

const arr = [1, 2, 3];
let [x, y, z] = arr;

x
y
z

//Let's see the syntax based on this example. The left-hand side of the assignment is an array of variables, and the right-hand side is an array of values. The array elements are assigned in order, with the first element of the array going to the first variable, and so on.

//For example, if you have an array of multiple values, you can assign them to multiple variables like this:

let [a, b, c, d] = [1, 2, 3, 4];

//Skipping items when array destructuring

const ArrValue = ['one', 'two', 'three'];

//destructuring assignment in arrays
const [x,,,z] = arrValue; // 'one' and 'undefined'

console.log(x); //one
console.log (z); //three

// Assign Remaining Elements to a Single Variable by combining with a spread operator. You can assign the remaining elements of an array to a variable using the spread syntax '...'

const names = ['Sonny', 'Jay', 'Brian', 'Rodgers'];

//destructuring assignment in arrays
//assigning remaining elements to y

const [x,,,y] = names;

console.log(x); //Sonny
console.log(y); // ["Jay", "Brian", "Rodgers"]

//This trick works in object destructuring too!

const person = {
    name: 'Sonny Sangha'
    age: 28,
    gender: 'Male'
}

//destructuring assignment
//assigning properties to rest

let { name, ...rest } = person;

console.log(name); // Sonny Sanga
console.log(rest); // {age: 28, gender: 'Male'}

//Note: The variable with the spread syntax cannot have a trailing comma,. You should use this rest element (variable with spread syntax) as the last variable. For example:

const names = ['Sonny', 'Jay', 'Brian', 'Rodgers'];

//throws an error
const [...x, y] = names;
console.log(x);

//In this example, two variables are swapped using the destructuring assignment syntax:

let name1 = 'Sonny';
let name2 = 'Jay';

//swapping variables
[name1, name2] = [name2, name1];

console.log(name1); // Jay
console.log(name2); //Sonny

//A function may return an object or null in some situations. For example:

function getPerson() {
    return null;
}

let { firstName, lastName } = getPerson() || {};

console.log(firstName, lastName);

//Nested Object Destructuring. Assuming that you have an member in the PAPAFAM where the object has a name object as the property:

let member = {
    id: 01,
    name: {
        firstName: 'Sonny',
        lastName: 'Sangha'
    }
};

//Here's how to destructure it...
let { id, name: { firstName, lastName } } = member;

console.log(id)
console.log(firstName); //Sonny
console.log(lastName); //Sangha

//It's possible to destructure nested properties as well as the parent property:

let member = {
    id: 01,
    name: {
        firstName: 'Sonny',
        lastName: 'Sangha'
    }
};

let { id, name: { firstName, lastName }, name = member;

console.log(firstName);//Sonny
console.log(lastName); //Sangha
console.log(name);// { firstName: 'Sonny', lastName: 'Sangha'}

//Destructuring Function Arguments. Suppose we have the following example:

let displayFullName = (person) => `${person.firstName} ${person.lastName}`;

let person = {
    firstName: 'Sonny',
    lastName: 'Sangha'
};

displayFullName(person);

//Compare the two...
//letdisplayFullName = (person) => `${person.firstName} ${person.lastName}`;
// letdisplayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;

//The ES6 is the cleaner approach once practiced several times!

let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;

let person = {
    firstName: 'Sonny',
    lastName: 'Sangha'
};

displayFullName(person);