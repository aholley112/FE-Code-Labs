/**
 * Tasks
 
1. Create three variables in the global scope called firstName, lastName and age, and a function that logs them to the console in the following format e.g. 'John Smith is 25 years old'.

2. Move the variables into the local scope of the function and add another variable this time called country, add this to our statement '...and lives in England'.

3. Outside of the function change the firstName to 'James', did you encounter a problem?

4. What will the following code return?
let game = 'Sonic';

if(true) {
    let game = 'Mario';
    console.log (game);
}

console.log(game);
 
 */



function user() {
    let firstName = 'John';
    let lastName = 'Smith';
    let age = 25;
    let country = 'England';
    console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}`);
}

let firstName = 'James';

user();

let game = "Sonic";

if(true) {
    let game = "Mario";
    console.log (game);
}

console.log(game);


